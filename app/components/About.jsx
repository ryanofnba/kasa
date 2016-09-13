import React, { Component } from 'react';
import Member from 'Member';

class About extends Component {
    constructor(props) {
        super(props);

        this.members = [];
    }

    populateMembers() {

        this.members.push({
            imgSrc: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12295403_10154411577319057_7339854552243847200_n.jpg?oh=14f525868c36bde3a09e1bbda23a2967&oe=584448C5",
            name: "Jon Wang",
            position: "President"
        });

        this.members.push({
            imgSrc: "https://scontent-lax3-1.xx.fbcdn.net/t31.0-1/12983351_10208860735626077_6257155920595268816_o.jpg",
            name: "Krystal Lai",
            position: "Vice President"
        });

        this.members.push({
            imgSrc: "https://scontent-lax3-1.xx.fbcdn.net/t31.0-8/10634013_10205118074616085_2147127978262837205_o.jpg",
            name: "Alyssa Pidlaoan",
            position: "Secretary"
        });

        this.members.push({
            imgSrc: "https://scontent.fsnc1-3.fna.fbcdn.net/t31.0-8/12916932_551431438370546_7283733245991238353_o.jpg",
            name: "Sean Nguyen",
            position: "Treasurer"
        });

        this.members.push({
            imgSrc: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/13091914_590715471093942_1217253034579351749_n.jpg?oh=564d043434e84dc580149625d6218e45&oe=5817F5E8",
            name: "Ethan Soong",
            position: "Graphic Coordinator"
        });

        this.members.push({
            imgSrc: "https://scontent-lax3-1.xx.fbcdn.net/t31.0-1/12977255_1025911760830766_5380739070855621566_o.jpg",
            name: "Kyle Nishimura",
            position: "Historian"
        });

        this.members.push({
            imgSrc: "https://scontent-lax3-1.xx.fbcdn.net/t31.0-8/13442683_10209294901478379_3425221139975940141_o.jpg",
            name: "Julienne Chow",
            position: "Social Chair"
        });

        this.members.push({
            imgSrc: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/13418750_10209733797245702_2532623432916949808_n.jpg?oh=d1d259f8ddaa006c5cb79ee252a646d8&oe=58430A50",
            name: "Angela Pidlaoan",
            position: "Social Chair"
        });

        this.members.push({
            imgSrc: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/13177107_569977929849230_3281459441007377994_n.jpg?oh=a3e5b092aa744213e0da6813c68062d4&oe=585BD33C",
            name: "Renee Millinger",
            position: "Social Chair"
        });

    }
      render() {

          this.populateMembers();

          const renderMembers = () => {
              if (this.members.length > 0) {
                  return this.members.map(member => {
                      return (
                          <Member key={member.name} {...member} />
                      );
                  })
              }
              else {
                  return (
                      <div className="no-announcements">No Board Members</div>
                  );
              }

          };

        return (
          <div className="about">
            <div className="about-title">
              <h1>What is KASA?</h1>
            </div>
            <div className="about-container">
              <div className="board-container">
                <h4>Board Members</h4>
                <div className="board-container1">
                    {renderMembers()}
                </div>
              </div>
              <div className="about-text-container">
                  <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/1959517_10202013596036902_7037422157284886558_n.jpg?oh=55ef83a98e2f74999d8f3f04ec32f806&oe=58702992"/>
                KASA history
              </div>
            </div>
          </div>
        );
      };
}

export default About;


