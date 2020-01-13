import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
export default class Security extends Component {
    render() {
        return (
            <div>
                <div className="why">Security</div>
                <Grid container justify={'center'} className="container">
                    <Grid item xs={12} sm={8} >
                        <p> At Inkredo, security is not just a practice, it's a pledge that we have taken to keep your data protected and safe from breaches and hacks.</p>
                        <p>All the data transmission between client and server is SSL encrypted and authenticated over HTTPS.</p>
                        <p>Inkredo's codebase is written statically in Python 3 which in itself will automatically prevent a number of bugs.</p>
                        <p>All access to user data at Inkredo's backend is through carefully-audited core libraries that validate the user who is making the request to access data. Only senior-most developers have access to production servers or sensitive data. They control the access to it on a need basis. In particular, anyone with root access to Inkredo's server will have complete control over installation and user data. It would be impossible to avoid this because the server needs access to support new features and product upgrades.</p>
                    </Grid>
                </Grid>
                
                <Grid container justify={'center'} className="container">
                    <Grid item xs={12} sm={8} >
                    <h4 className="sub-head">User-uploaded content</h4>
                        <p>User-uploaded content is hosted on a separate domain from the main Inkredo server to protect against any same domain name attacks. e.g. inkredo-user-content.example.com</p>
                        <p>The URLs used to access uploaded files are long, random strings, providing one layer of security against unauthorised users accessing files uploaded (an authorised user would need to share the URL with an unauthorised user in order for the file to be accessed by the unauthorised user. Of course, any such authorised user could have just downloaded and sent the file instead of the URL, so this is arguably pretty good protection.) However, to help protect against accidental sharing of URLs to restricted files (e.g. by forwarding a missed-message email or leaks involving the Referer header), we provide additional layers of protection in backend as well.</p>
                        <div>For any security related queries, please email at security@inkredo.in</div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}