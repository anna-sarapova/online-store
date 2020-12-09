import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SpeechService {

    constructor() {
    }

    private static textToAudio(text: string): void {
        const speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        speech.text = text;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    }

    public textElements(event): void {
        SpeechService.textToAudio(event.target.innerText);
    }

    public textInput(event): void {
        SpeechService.textToAudio(event.target.placeholder);
    }

    public textImage(event): void {
        SpeechService.textToAudio(event.target.alt);
    }
}
