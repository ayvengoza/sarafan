import SockJS from 'sockjs-client'
import { Stomp } from '@stomp/stompjs'
var stompClient = null
const handlers = []

export function connect() {
    const socket = new SockJS('/gs-guide-websocket')
    stompClient = Stomp.over(socket)
    stompClient.connect({}, frame => {
        console.log('Connected: ' + frame)
        stompClient.subscribe('/topic/activity', message => {
            handlers.forEach(handler => handler(JSON.parse(message.body)))
            // showGreeting(JSON.parse(greeting.body).content)
        });
    });
}

export function addHandler(handler) {
    handlers.push(handler)
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect()
    }
    console.log("Disconnected")
}

function sendMessage(message) {
    stompClient.send("/app/changeMessage", {}, JSON.stringify(message))
}
