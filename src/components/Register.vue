<script>
/* eslint-disable brace-style, space-before-function-paren */
</script>

<template>
    <!-- Create account modal -->
    <b-modal ok-disabled id="signupModal" size='lg' title="Create a new Factoryshop account" style='z-index:100'>
        <form role="form" method="put" @submit.prevent="registerAccount">
            <div class="form-group">
                <label>Username*</label>
                <input type="text" v-validate="'required'" v-model="user.username" name="username" class="form-control" placeholder="Enter username"/>
                <span style="color:red;" v-show="errors.has('username')">{{ errors.first('username') }}</span>
            </div>
            <div class="form-group">
                <label>eMail*</label>
                <input type="text" v-validate="'required'" v-model="user.email" name="email" class="form-control" placeholder="Enter email address to be associated with this account"/>
                <span style="color:red;" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            </div>
            <div class="form-group">
                <label>Password*</label>
                <input type="password" v-validate="'required'" v-model="user.password" name="password" class="form-control" placeholder="Enter login password"/>
                <span style="color:red;" v-show="errors.has('password')">{{ errors.first('password') }}</span>
            </div>
            <input type="submit" class="btn btn-success" value="Create Account"/>
        </form>
        <template slot="modal-footer">
        <b-btn style="display:none" variant="danger"></b-btn>
        <b-btn style="display:none" variant="primary"></b-btn><!-- @click="save" -->
        </template>
    </b-modal>
</template>

<script>
import {HttpClient} from '../assets/js/HttpClient.js'
import {SessionManager} from '../assets/js/SessionManager.js'

export default {
    name: 'Login',
    data() {
        return {
            user:{username:'', password:'', email: '', access_level: 1}
        }
    },
    methods:
    {
        registerAccount()
        {
            let bcrypt = require('bcryptjs');
            //var salt = bcrypt.genSaltSync(10);

            this.$validator.validateAll().then((result) =>
            {
                if (result)
                {
                    let bcrypt = require('bcryptjs');

                    //make an asynchronous call to create user account
                    //var salt = bcrypt.genSaltSync(12);
                    let hashed_pwd = bcrypt.hashSync(this.user.password, 12);
                    this.user.password = hashed_pwd;

                    alert('creating account ['+this.user.username+' : '+ hashed_pwd +']');

                    //TODO: HttpClient.defaults.headers['session_id'] = SessionManager.getInstance().session_id;

                    //PUT http://localhost:8080/user
                    HttpClient.put('user', this.user).then(response =>
                    {
                        alert(response.data);
                        // update session_id
                        // HttpClient.defaults.headers['session_id'] = this.session_id;
                    }).catch(err =>
                    {
                        // this.errors.push(err);
                        alert(err);
                    });
                    return;
                } else alert('Please correct the displayed errors.');
            });
        }
    }
}
</script>
