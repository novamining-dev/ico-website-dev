import React from 'react';
const avatar = '/images/avatar.png';
const team = [
  {
  id:1,
  name:'Management',
  strong:'Team',
  members:[
    // section:'Management Team',
    {
      id:1,
      name:'Mattia Pintus',
      role:'Chief Executive Officer',
      extra:'Founder'
    },
    {
      id:2,
      name:'Matteo Cugusi',
      role:'Chief Informative Officer',
      extra:'Co-founder',
    },
    {
      id:3,
      name:'Giorgio Pintus',
      role:'Chief Operative Officer',
    },
    {
      id:4,
      name:'Andrea Raspitzu',
      role:'Chief Technical Officer',
    },
    {
      id:5,
      name:'Ho Yi Chueng',
      role:'Chief Marketing Officer',
    },
    {
      id:6,
      name:'Davide Damiano',
      role:'Chief Sustainaibility Officer',
    },
    {
      id:7,
      name:'Antonio Censabella',
      role:'Chief Financial Officer',
    }
  ]},
  {
  id:2,
  name:'Board of',
  strong:'Advisor',
  members:[
    {
      id:1,
      name:'Bill Yu',
      role:'Hardware Development'
    },
    {
      id:2,
      name:'Risto Pietila',
      role:'Bitcoin Evangelist'
    },
    {
      id:3,
      name:'Giotto De Filippi',
      role:'Ico expert'
    },
    {
      id:4,
      name:'Alberto De Luigi',
      role:'Blockchain Expert'
    },
    {
      id:5,
      name:'Carlo Matzuzzi',
      role:'3d Rendering Engineer'
    },
    {
      id:6,
      name:'Name Surname',
      role:'Cooling Expert'
    },
    {
      id:7,
      name:'Name Surname',
      role:'Power Management Expert'
    },
    // {
    //   id:7,
    //   name:'Atanas Dinchev',
    //   role:'Technical Advisor'
    // },
    // {
    //   id:5,
    //   name:'Alberto De Luigi',
    //   role:'Blockchain Expert'
    // },
    {
      id:8,
      name:'Giulia Aranguena',
      role:'Legal Advisor'
    },
    {
      id:9,
      name:'Federico Serratore',
      role:'Legal Advisor'
    }
  ]},
  {
  id:3,
  name:'Core',
  strong:'Team',
  members:[
    {
      id:1,
      name:'Federico Calarco',
      role:'Project Manager',
      extra:'Dev-Ops'
    },
    {
      id:2,
      name:'David Jaramillo',
      role:'Dev-Ops'
    },
    {
      id:3,
      name:'Stefano Gessa',
      role:'Dev-Ops'
    },
    {
      id:4,
      name:'Kert Hallik',
      role:'Mining-Ops'
    },
    {
      id:5,
      name:'Pierluigi Bolino',
      role:'Mining-Ops'
    },
    {
      id:6,
      name:'Andrea Sechi',
      role:'Mining-Ops'
    },
    {
      id:7,
      name:'Fausto Bonifacio',
      role:'Community Manager'
    },
    {
      id:8,
      name:'Stefania Stimolo',
      role:'Blog Manager & Copywriter'
    },
    {
      id:9,
      name:'Matteo Perticone',
      role:'Support Manager'
    },
    {
      id:10,
      name:'Mattia Franzoni',
      role:'Copywriter'
    },
    {
      id:11,
      name:'Farcas Ionut',
      role:'Social Helper'
    },
    {
      id:12,
      name:'Sean Logan',
      role:'Social Helper'
    },
    {
      id:13,
      name:'Gabriele Mazzola',
      role:'Customer Support'
    },
    {
      id:14,
      name:"Gaetano D'Orsi",
      role:'Customer Support'
    },
    {
      id:15,
      name:'Stefano Casu',
      role:'Customer Support'
    }
  ]}
  // {
  // id:4,
  // name:'Mining Operators',
  // members:[
  //   {
  //     id:1,
  //     name:'Pierluigi Bolino',
  //     role:'Senior Operator'
  //   },
  //   {
  //     id:2,
  //     name:'Andrea Sechi',
  //     role:'Junior Operator',
  //   },
  //   {
  //     id:3,
  //     name:'Davide Damiano',
  //     role:'Junior Operator'
  //   },
  // ]},
  // {
  // id:5,
  // name:'Social Media Marketing',
  // members:[
  //   {
  //     id:1,
  //     name:'Fausto Bonifacio',
  //     role:'Community Manager'
  //   },
  //   {
  //     id:2,
  //     name:'Cheung Ho Yi',
  //     role:'Art Director'
  //   },
  //   {
  //     id:3,
  //     name:'Stefania Stimolo',
  //     role:'Copywriter and Translator'
  //   },
  //   {
  //     id:4,
  //     name:'Farcas Ionut',
  //     role:'Social Helper'
  //   },
  //   {
  //     id:5,
  //     name:'Sean Logan',
  //     role:'Social Helper'
  //   }
  // ]},
  // {
  // id:6,
  // name:'Supporter',
  // members:[
  //   {
  //     id:1,
  //     name:'Stefano Casu',
  //     role:'Crypto trader/analyst'
  //   },
  //   {
  //     id:2,
  //     name:'Matteo Perticone',
  //     role:'Support Manager'
  //   },
  //   {
  //     id:3,
  //     name:'Gabriele Mazzola',
  //     role:'Support Operator'
  //   }
  // ]
// }
]


export const Team = ({match}) => (
  <div className="row no-gutters d-flex justify-content-center h-100 alternative contain">
    <div className="col-8 mt-50 mb-50 ">

    {
      team.map(team => {
        return(
          <div className="row no-gutters d-flex justify-content-center upcase mt-50 mb-50" key={team.id}>
              <p className="col-12 text-center mb-0 mt-50 p-0 green   f13 light">The Xnm project</p>
              <h1 className="col-12 text-center mb-50 mt-0 black animated fadeInUp light p-0 ">
                {team.name} <span className="normal">{team.strong}</span>
              </h1>

                  {team.members.map(member=> {
                    if(member.name === 'Mattia Pintus'){
                      return(
                        <div className="col-12 text-center member animated fadeInDown mt-50" key={member.id}>

                          <div className="row-no-gutters intTab" key={member.id}>

                            <div className="col-12">

                              <div className="row no-gutters d-flex justify-content-center">
                                <img src={avatar} alt="" className="col-auto" style={{  minHeight:80 , maxHeight:150}}/>
                              </div>

                            </div>

                            <p className="col-12 text-center name mb-0 mt-15  black">{member.name}</p>
                            <p className="col-12 text-center role green m-0 light  ">{member.role}</p>
                            <p className="col-12 text-center role m-0 green  ">{member.extra}</p>

                          </div>

                        </div>
                      )
                    }else{
                    return(

                      <div className="col-12 col-sm-6 col-md-4 text-center member animated fadeInDown" key={member.id}>

                        <div className="row-no-gutters intTab" key={member.id}>

                          <div className="col-12">

                            <div className="row no-gutters d-flex justify-content-center">
                              <img src={avatar} alt="" className="col-auto" style={{  minHeight:80 , maxHeight:150}}/>
                            </div>

                          </div>

                          <p className="col-12 text-center name mb-0  mt-15 black  ">{member.name}</p>
                          <p className="col-12 text-center role green  mb-0 light  ">{member.role}</p>
                          { member.extra ?   <p className="col-12 text-center m-0 role green  ">{member.extra}</p> : null}
                        </div>

                      </div>

                    )}
                  })}

          </div>
      )})
    }

    </div>
  </div>
)
