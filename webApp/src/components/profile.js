import  React,{ useState } from 'react';


class Profile extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     className: "profile",
        //     photoClassName: "profile-photo",
        //     textClassName:"employeeName"
        // }
    }
    render() {
        //console.log(this.props)
        return (
        <div className="profileContainer">
                <div
                   className="profile" 
                >
                    <div className="profile-layout-left">
                        <img src={this.props.profile.imagePortraitUrl}
                            className="profile-photo"
                        ></img>
                        
                    </div>
                    <div className="profile-layout-right">
                        <h1>
                            <a >{this.props.profile.name}</a>           
                        </h1>
                        <span >{this.props.office === "Ljubljana" ? "🇸🇮  " : "🇸🇪  "} {this.props.profile.office}</span>
                        

                    




                    </div>
                    
            </div>
            </div>
    )
    }
    
}

export default Profile