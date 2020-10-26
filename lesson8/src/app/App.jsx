import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import { AttendeeList } from "./AttendeeList";
import Tab from './Tab';
import TabController from './TabController';


const mockAttendee = [
    {
        name: 'Christoph',
        sex: 'm',
        interested: true
    },
    {
        name: 'Iwona',
        sex: 'w',
        interested: true

    }, {
        name: 'Oliver',
        sex: 'm',
        interested: false
    }
]



export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            attendeeList: mockAttendee
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(newAttendee) {

        this.setState(prevState => {
            return {
                ...prevState,
                attendeeList: [
                    ...prevState.attendeeList,
                    newAttendee
                ]
            }
        })
    }

    render() {
        return (
            <div>
                <TabController>
                    <Tab headline="Registrierung">
                        <RegisterForm onSubmit={this.handleSubmit} />
                    </Tab>
                    <Tab headline="Teilnehmendenliste">
                        <AttendeeList attendees={this.state.attendeeList} />
                    </Tab>
                </TabController>
            </div>
        );
    }
}

