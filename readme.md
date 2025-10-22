#backend repo

## Download Vosk model (English Indian 0.5) from 
https://alphacephei.com/vosk/models

## To run Python server (FastAPI + Uvicorn):
uvicorn app:app --host 0.0.0.0 --port 8000

## To test the API via terminal curl command:
curl -X POST http://localhost:4000/api/stt \
     -F "audio=@/<audio_address>" -F "lang=en
"
