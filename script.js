let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)}
// function wishme(){
//     let day=new Date()
 
//     let hours=day.getHours()
//     console.log(hours)
//     if(hours>=0 && hours<12){
//       speak("good morning sir")
//     }
//     else if(hours>=12 && hours<16){
//         speak("good afternoon sir")
//     }
//     else{
//         speak("good evening sir")
//     }

// }
// window.addEventListener('load',()=>{
//     wishme()
// })
let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.onresult=(event)=>{
    let currentindex=event.resultIndex
    let transcript=event.results[currentindex][1].transcript
    content.innerText=transcript
    takecommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
 function takecommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello my boss,how are you sir")
    }
    else if(message.includes("i am fine ")){
        speak("thats great sir")
    }
    else if(message.includes("how are you")){
        speak("perfect ,sir")
    }
    else if(message.includes("thank you")){
        speak("you are welcome ,sir")
    }
   
   
    else if(message.includes("who are you")){
        speak("i am miku virtual assistance,created by vibhor")
    }
   
    else if(message.includes("shutup miku")){
        speak("i am sorry sir")
        setTimeout(function(){
        speak("please talk to me sir")},5000)}
    else if(message.includes("open youtube")){
        speak("open youtube.....")
        window.open("https://www.youtube.com/","_blank")
    }
        else if(message.includes("open google")){
            speak("open google.....")
            window.open("https://www.google.com/","_blank")

    }
    else if(message.includes("open facebook")){
        speak("open facebook.....")
        window.open("https://www.facebook.com/","_blank")
}
 else if(message.includes("open istagram")){
    speak("open istagram.....")
    window.open("https://www.istagram.com/","_blank") 
}
else if(message.includes("open calculator")){
    speak("open calculator.....")
    window.open("calculator://") }
    else if(message.includes("open telegram")){
        speak("open telegran.....")
        window.open("telegram://") }
        else if(message.includes("time")){
            
            let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
             speak(time)}
             else if(message.includes("open vscode")){
                speak("visual stdio code is open now.....")
                window.open("Visual Studio Code://") }
                else if(message.includes("open voice recorder")){
                    speak("voice recorder is open now.....")
                    window.open("Voice Recorder://") }
                    else if(message.includes("open fixefox")||message.includes("open mozilla fixefox")){
                        speak("mozilla firefox is open now.....")
                        window.open("Firefox://") }
            else {
    let finaltext="this is i found on internet regarding"+message.replace("miku","")
    speak(finaltext)
    window.open(`https://www.google.com/search?q=${message.replace("miku","")}`,"_blank")
}
 }

