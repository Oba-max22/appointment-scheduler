import React from "react";
import "../styles/Calendar.css";
import { Inject, ScheduleComponent, Day, Week,
        ViewsDirective, ViewDirective,
        ResourcesDirective, ResourceDirective
        } from "@syncfusion/ej2-react-schedule";

const Calendar = () => {

    const localData = {
        dataSource: [{
            Id: 1,
            Subject: 'Skating Class',
            From: new Date(2021, 8, 29, 9, 30, 0),
            To: new Date(2021, 8, 29, 10, 24, 0),
            Location: 'Tower park'
        }], 
    };

    const resourceData = [
        { DoctorText: 'Marvin T.', Id: 1, Color: '#F97B5C' },
        { DoctorText: 'Mayowa A.', Id: 2, Color: '#F97B5C' },
        { DoctorText: 'Clement Q.', Id: 3, Color: '#F97B5C' },
        { DoctorText: 'Octa Devor', Id: 4, Color: '#F97B5C' },
        { DoctorText: 'Hellia Satun', Id: 5, Color: '#F97B5C' }
    ];

    const eventTemplate = (props) => {
        return (<div className="template-wrap">{props.Subject}</div>);
    };

    return(
        <ScheduleComponent currentView="Day" width='100%' height='54rem' 
            eventSettings={{ dataSource: localData.dataSource , template: eventTemplate,
                fields: {
                            startTime: { name: 'From' },
                            endTime: { name: 'To' }
                        } 
             }}
             group= {{ resources: ['Doctors'] }}
             > 
            <Inject services={[ Day, Week ]}/>
            <ViewsDirective>
                <ViewDirective option='Day' startHour='07:30' endHour='17:30'/>
                <ViewDirective option='Week' startHour='07:30' endHour='17:30' dateFormat='dd-MMM-yyyy'/>
            </ViewsDirective>
            <ResourcesDirective>
                <ResourceDirective field='DoctorId' title='Attending Physical' name='Doctors' 
                    allowMultiple={true} dataSource={resourceData} textField='DoctorText' idField='Id' colorField='Color'>
                </ResourceDirective>
            </ResourcesDirective>
        </ScheduleComponent>
    );
}

export default Calendar;