<script>
/* eslint-disable brace-style, space-before-function-paren */
</script>

<template>
    <!-- Login modal -->
    <b-modal ok-disabled id="loginModal" size='lg' title="Sign-in to Factoryshop" style='z-index:100'>
        <form role="form" method="put" @submit.prevent="login">
            <div class="form-group">
                <label>Username*</label>
                <input type="text" v-validate="'required'" v-model="user.username" name="username" class="form-control" placeholder="Enter username"/>
                <span style="color:red;" v-show="errors.has('username')">{{ errors.first('username') }}</span>
            </div>
            <div class="form-group">
                <label>Password*</label>
                <input type="password" v-validate="'required'" v-model="user.password" name="password" class="form-control" placeholder="Enter login password"/>
                <span style="color:red;" v-show="errors.has('password')">{{ errors.first('password') }}</span>
            </div>
            <input type="submit" class="btn btn-success" value="Login"/>
        </form>
        <template slot="modal-footer">
        <b-btn style="display:none" variant="danger"></b-btn>
        <b-btn style="display:none" variant="primary"></b-btn>
        </template>
    </b-modal>
</template>

<script>
import { HttpClient } from '../assets/js/HttpClient.js'

export default {
    name: 'Login',
    data() {
        return {
            user:{ username: '', password: '', email: '', access_level: 1 }
        }
    },
    methods:
    {
        login()
        {
            this.$validator.validateAll().then((result) =>
            {
                if(result)
                {
                    let bcrypt = require('bcryptjs');
                    //alert('authenticating ['+this.user.username+' : '+this.user.password+']');
                    //make an asynchronous call to authenticate user

                    let hashed_pwd = bcrypt.hashSync(this.user.password, 12);
                    alert('authenticating [' + this.user.username + ' : ' + hashed_pwd + ']');

                    HttpClient.defaults.headers['username'] = this.user.username;
                    HttpClient.defaults.headers['password'] = hashed_pwd;

                    //PUT http://localhost:8080/session
                    HttpClient.put('session').then(response =>
                    {
                        alert(response.data);
                        console.log(response);
                        document.cookie = response.data;
                        // update session_id
                        // HttpClient.defaults.headers['session_id'] = this.session_id;
                        //clear username & password from headers
                        HttpClient.defaults.headers['username'] = undefined;
                        HttpClient.defaults.headers['password'] = undefined;
                    }).catch(err =>
                    {
                        // this.errors.push(err);
                        alert(err);
                    });
                    return;
                } else alert('Please correct the displayed errors: ');
            });
        }
    }
}
</script>
