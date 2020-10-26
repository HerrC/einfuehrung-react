import React, { Component } from 'react';

export class AttendeeList extends Component {
    render() {

        const attendeeList = this.props.attendees.map((attendee, index) => {
            const key = `attendee-${index}`;
            return (
                <tr key={key}>
                    <td>{attendee.name}</td>
                    <td>{attendee.sex}</td>
                    <td><input type="checkbox" readOnly checked={attendee.interested} /></td>
                </tr>
            )
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Geschlecht</th>
                        <th>Interessiert</th>
                    </tr>
                </thead>
                <tbody>
                    {attendeeList}
                </tbody>
            </table >
        )
    }
}
<h3>Liste</h3>
export default AttendeeList;