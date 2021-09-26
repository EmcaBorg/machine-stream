import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Environment} from '../../../environments/environment';
import {Channel, Socket} from 'phoenix';

@Injectable()
export class SocketService {

    private socket: Socket;
    private channels: { [key: string]: Channel } = {};
    public subject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor() {
        this.connect();
    }

    connect() {
        const endpoint = `ws://${Environment.host}/api/${Environment.version}/events`;
        this.socket = new Socket(endpoint);
        this.socket.connect();
    }

    /***
     * E - event type
     */
    join<E>(topic: string, event: string) {
        if (!this.channels[topic]) {
            const channel = this.socket.channel(topic, {});
            channel.join();
            channel.on(event, response => {
                this.subject.next(response as E);
            });
            this.channels[topic] = channel;
        }
    }

    disconnect() {
        Object.values(this.channels).forEach((channel: Channel) => channel.leave());
        this.channels = {}
        this.subject.unsubscribe();
        this.socket.disconnect();
    }
}







