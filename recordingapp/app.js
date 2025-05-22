// Check if the browser supports required APIs
if (!navigator.mediaDevices || !window.AudioContext) {
    alert('Your browser does not support required APIs.');
  }
  
  const recordButton = document.getElementById('recordButton');
  const statusDiv = document.getElementById('status');
  const transcriptDiv = document.getElementById('transcript');
  
  let audioContext;
  let mediaStream;
  let sourceNode;
  let processorNode;
  let websocket;
  let isRecording = false;
  
  recordButton.addEventListener('click', async () => {
    if (!isRecording) {
      await startRecording();
    } else {
      stopRecording();
    }
  });
  
  async function startRecording() {
    try {
      // Request microphone access
      mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
      // Load the AudioWorklet module
      await audioContext.audioWorklet.addModule('raw-pcm-worker.js');
  
      // Create nodes
      sourceNode = audioContext.createMediaStreamSource(mediaStream);
      processorNode = new AudioWorkletNode(audioContext, 'raw-pcm-worklet');
  
      // Handle audio data from the processor
      processorNode.port.onmessage = (event) => {
        const audioData = event.data;
        if (websocket && websocket.readyState === WebSocket.OPEN) {
          websocket.send(audioData);
        }
      };
  
      // Connect nodes
      sourceNode.connect(processorNode);
      processorNode.connect(audioContext.destination); // Optional, for monitoring
  
      // Open WebSocket connection to the server
      websocket = new WebSocket('ws://localhost:8080');
      websocket.binaryType = 'arraybuffer';
  
      websocket.onopen = () => {
        statusDiv.textContent = 'Recording...';
      };
  
      websocket.onmessage = (event) => {
        const transcriptText = event.data;
        transcriptDiv.textContent += transcriptText + '\n';
      };
  
      websocket.onclose = () => {
        statusDiv.textContent = 'WebSocket closed.';
      };
  
      websocket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
  
      // Monitor AudioContext state
      audioContext.onstatechange = () => {
        if (audioContext.state === 'suspended') {
          resumeAudioContext();
        }
      };
  
      // Attempt to keep the AudioContext active
      monitorAudioContext();
  
      isRecording = true;
      recordButton.textContent = 'Stop Recording';
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Error accessing microphone. Please check permissions.');
    }
  }
  
  function stopRecording() {
    // Stop the audio processing
    if (processorNode) {
      processorNode.disconnect();
      processorNode = null;
    }
    if (sourceNode) {
      sourceNode.disconnect();
      sourceNode = null;
    }
    if (audioContext) {
      audioContext.close();
      audioContext = null;
    }
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
      mediaStream = null;
    }
    if (websocket) {
      websocket.close();
      websocket = null;
    }
    isRecording = false;
    recordButton.textContent = 'Start Recording';
    statusDiv.textContent = 'Recording stopped.';
  }
  
  async function resumeAudioContext() {
    try {
      await audioContext.resume();
      console.log('AudioContext resumed.');
    } catch (error) {
      console.error('Failed to resume AudioContext:', error);
    }
  }
  
  function monitorAudioContext() {
    if (audioContext && audioContext.state !== 'closed') {
      // Attempt to resume AudioContext if suspended
      if (audioContext.state === 'suspended') {
        resumeAudioContext();
      }
  
      // Keep processor node active
      if (processorNode) {
        processorNode.port.postMessage('keepAlive');
      }
  
      // Call this function periodically
      setTimeout(monitorAudioContext, 1000);
    }
  }


  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init be ys Ss me gs ws capture Ne calculateEventProperties xs register register_once register_for_session unregister unregister_for_session Rs getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Is ks createPersonProfile Ps bs opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing $s debug Es getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_gowcZmatwgR6uakgUUYUvPJigtiGaP9iArvu2Y9OFcK', {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
    })