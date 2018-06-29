import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
const green = '#00b072';
const violet = '#512d81';
const timeInfo = [{
	id:1,
	date:"April 2017",
	color:green,
	icon:"fas fa-lightbulb",
	title:"First Bussiness Concept Design"
},
{
	id:2,
	date:"May 2017",
	color:green,
	icon:"fas fa-bolt",
	title:"Early Presale"
},
{
	id:3,
	date:"June 2017",
	color:green,
	icon:"fas fa-briefcase",
	title:"Setting Up Bulgarian Company"
},
{
	id:4,
	date:"July 2017",
	color:green,
	icon:"fas fa-search",
	title:"Research and Bussiness Development"
},
{
	id:5,
	date:"August 2017",
	color:green,
	icon:"fas fa-clipboard",
	title:"Starting Development of Full-Stack Mininv Environment"
},
{
	id:6,
	date:"September 2017",
	color:green,
	icon:"fas fa-users",
	title:"Localization of Advisors, Strategic Partners and Datacenter location"
},
{
	id:7,
	date:"October 2017",
	color:green,
	icon:"fas fa-microchip",
	title:"First Contact with ASIC Chip Suppliers"
},
{
	id:8,
	date:"November 2017",
	color:green,
	icon:"fas fa-memory",
	title:"First Contact with VGAs and Boards producers"
},
{
	id:9,
	date:"December 2017",
	color:green,
	icon:"fas fa-handshake",
	title:"Travel to China for aggreement with VGAs and Boards producers"
},
{
	id:10,
	date:"January 2018",
	color:green,
	icon:"fab fa-user-check",
	title:"Core Team joined by new members"
},
{
	id:11,
	date:"February 2018",
	color:green,
	icon:"fas fa-newspaper",
	title:"Press and Tv contacts(Il sole 24 ore ref. Francesco Giuliani"
},
{
	id:12,
	date:"March 2018",
	color:green,
	icon:"fas fa-code",
	title:"Proof-of-Hashrate-Commitment v0.1(Private Git)"
},
{
	id:13,
	date:"April 2018",
	color:green,
	icon:"fas fa-building",
	title:"HK International Fairs(Electronic Fair & Server ICT)"
},
{
	id:14,
	date:"June 2018",
	color:green,
	icon:"fab fa-font-awesome-flag",
	title:"ICO Website Release"
},
{
	id:15,
	date:"Q3 2018",
	color:violet,
	icon:"fas fa-file-alt",
	title:"White Paper",
	subtitle:"Public Draft Release"
},
{
	id:16,
	date:"Q3 2018",
	color:violet,
	icon:'fas fa-file-code',
	title:'Smart-Contract Release'
},
{
	id:17,
	date:"Q3 2018",
	color:violet,
	icon:'fas fa-list-alt',
	title:'ICO Listing'
},
{
	id:18,
	date:"Q3 2018",
	color:violet,
	icon:'fas fa-coins',
	title:'Private Token Pre-Sale'
},
{
	id:19,
	date:"Q3 2018",
	color:violet,
	icon:'fas fa-space-shuttle',
	title:'XNM Platform MVP'
},
{
	id:20,
	date:"Q3 2018",
	color:violet,
	icon:'fas fa-coins',
	title:'Public Token Pre-Sale'
},
{
	id:21,
	date:"Q4 2018",
	color:violet,
	icon:'fas fa-coins',
	title:'ICO Token-Sale'
}
]
export const Timeline = (props) => (

<div className="row no-gutters d-flex justify-content-center alternative contain">
	<VerticalTimeline className="col-11">
			<div className="row no-gutters">
				{timeInfo.map( event => (
							<VerticalTimelineElement
							key={event.id}
							className="vertical-timeline-element--work col-12 text-center"
							date={event.date}
							iconStyle={{backgroundColor:event.color,color: '#fff' , padding:0 , textAlign:'center'}}
							icon={<i className={[event.icon + ' white']} style={{height:25 , width:25 }}></i>} >
							<h3 className="vertical-timeline-element-title col-12 text-left">{event.title}</h3>
							<h4 className="vertical-timeline-element-subtitle col-12 text-left"> {event.subtitle ? event.subtitle : null}</h4>
					</VerticalTimelineElement>
				))}
			</div>
		</VerticalTimeline>
</div>


)
