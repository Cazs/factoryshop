<script>
/* eslint-disable brace-style, space-before-function-paren */
</script>

<template>
    <div style='margin-top: 200px;background-color:#fff;box-shadow: 10px 0px -20px #343434;'>
        <b-modal ok-disabled id="newFactoryModal" size='lg' title="New Factory" style='z-index:100'>
            <div class="my-4">
                <form role="form" method="post" @submit.prevent="addFactory">
                    <div class="form-group">
                        <label>Factory name*</label>
                        <input type="text" v-validate="'required'" v-model="newFactory.factory_name" name="factory_name" class="form-control" placeholder="Enter factory's Name"/>
                        <span style="color:red;" v-show="errors.has('factory_name')">{{ errors.first('factory_name') }}</span>
                    </div>
                    <div class="form-group">
                        <label>Industry*</label>
                        <input type="text" v-validate="'required'" v-model="newFactory.industry" name="industry" class="form-control" placeholder="Enter industry/specialty"/>
                        <span style="color:red;" v-show="errors.has('industry')">{{ errors.first('industry') }}</span>
                    </div>
                    <div class="form-group">
                        <label>physical Address*</label>
                        <input type="text" v-validate="'required'" v-model="newFactory.physical_address" name="physical_address" class="form-control" placeholder="Enter factory's address"/>
                        <span style="color:red;" v-show="errors.has('physical_address')">{{ errors.first('physical_address') }}</span>
                    </div>
                    <div class="form-group">
                        <label class="label" for="email">Contact eMail</label>
                        <input type="email" v-validate="'required|email'" :class="{'input': true, 'danger': errors.has('email') }" v-model="newFactory.email" name="email" class="form-control" placeholder="Enter contact email for factory representative."/>
                        <span style="color:red;" v-show="errors.has('email')" class="help danger">{{ errors.first('email') }}</span>
                    </div>
                    <div class="form-group">
                        <label class="label" for="tel">Tel No.</label>
                        <input type="tel" v-validate="'required'" :class="{'input': true, 'danger': errors.has('tel') }" v-model="newFactory.tel" name="tel" class="form-control" placeholder="Enter contact tel number for factory."/>
                        <span style="color:red;" v-show="errors.has('tel')" class="help danger">{{ errors.first('tel') }}</span>
                    </div>
                    <div class="form-group">
                        <label class="label" for="date_established">Date Established*</label>
                        <input type="hidden" name="max_date" value="2019-06-10">
                        <input type="hidden" name="min_date" value="2018-06-10">
                        <input type="date" v-validate="'before:max_date|after:min_date|date_format:YYYY-MM-DD'" data-vv-as="date established" v-model="newFactory.date_established" name="date_established" class="form-control" placeholder="Date Established">
                        <span style="color:red;" v-show="errors.has('date_established')">{{ errors.first('date_established') }}</span>
                    </div>
                    <div class="form-group">
                        <label>Registration Number*</label>
                        <input type="text" v-model="newFactory.registration_number" name="registration_number" class="form-control" placeholder="Enter factory's registration Number"/>
                    </div>
                    <div class="form-group">
                        <label>Tax Number*</label>
                        <input type="text" v-model="newFactory.tax_number" name="tax_number" class="form-control" placeholder="Enter factory's tax Number"/>
                    </div>
                    <div class="form-group">
                        <label>Delivery Range</label>
                        <input type="number" v-validate="'required'" v-model="newFactory.delivery_range" name="delivery_range" class="form-control" placeholder="Enter delivery range in KM"/>
                        <span style="color:red;" v-show="errors.has('delivery_range')">{{ errors.first('delivery_range') }}</span>
                    </div>
                    <div class="form-group">
                        <label>Order cost eligible for delivery (in ZAR)</label>
                        <input type="text" v-validate="'required'" v-model="newFactory.delivery_min_order_cost" name="delivery_min_order_cost" class="form-control" placeholder="What's the minimum order cost that the factory is willing to do a delivery?"/>
                        <span style="color:red;" v-show="errors.has('delivery_min_order_cost')">{{ errors.first('delivery_min_order_cost') }}</span>
                    </div>
                    <input type="submit" value="Create" />
                </form>
            </div>
            <template slot="modal-footer">
                <!-- <b-btn v-if="selected !== 'cancel'" variant="primary" @click="clickModalBtn('OK')">
                    OK
                </b-btn>
                <b-btn v-if="selected !== 'ok'" variant="danger" @click="clickModalBtn('CANCEL')">
                    Cancel
                </b-btn> -->
            </template>
        </b-modal>
        <!-- Create New Factory Product Modal-->
        <b-modal id="newProductModal" class="modal fade" tabindex="-1" size='lg' title="New Factory Product" style='z-index:100'>
            <div>
                <form role="form" method="post" action="/factory/product">
                    <div class="form-group">
                        <label>Brand Name*</label>
                        <input id="new_prod_brand" placeholder="Enter Product Name" name="brand_name" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Product Model [optional]</label>
                        <input id="new_prod_model" placeholder="Enter Product Model" name="product_model" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Product Description*</label>
                        <input id="new_prod_desc" placeholder="Enter Product Description" name="product_description" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Product Cost*</label>
                        <input id="new_prod_cost" placeholder="Enter Product Cost (excluding VAT)" name="product_cost" class="form-control"/>
                    </div>
                    <!--.form-group
                    label Product Quantity*
                    input.form-control(placeholder='Enter Product Quantity' name='quantity')
                    -->
                    <div class="form-group">
                        <label>Product Unit*</label>
                        <input id="new_prod_unit" placeholder="Enter product's unit of measurement" name="product_unit" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Serial Number [optional]</label>
                        <input id="new_prod_serial" placeholder="Enter product's serial Number" name="product_serial_code" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Product Category</label>
                        <input id="new_prod_cat" placeholder="Enter product's category - delimit with commas if multiple categories." name="product_category" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Other [optional]</label>
                        <input id="new_prod_other" placeholder="Any other text, e.g. expiry date" name="other" class="form-control"/>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" style="width:150px;height:60px;" onclick="return commitFactoryProduct();" class="btn btn-success">Create Product</button>
                        <button type="reset" style="margin-left: 10px;width:120px;height:60px;" class="btn btn-warning">Reset Form</button>
                        <button type="button" data-dismiss="modal" style="margin-left: 10px;width:120px;height:60px;" class="btn btn-danger">Dismiss</button>
                    </div>
                </form>
            </div>
        </b-modal>

        <!-- New Factory Modal -->
        <div style='width:250px;height:80px;z-index:10;border-radius:5px;background-color:transparent;position:fixed;top:100px;'>
            <b-btn v-b-modal.newFactoryModal class="btn-new-factory btn btn-success btn-lg">
                <i class="fa fa-plus"></i>New Factory
            </b-btn>
        </div>

        <Masthead></Masthead>

        <!-- Bootstrap table -->
        <b-container fluid>
            <!-- User Interface controls -->
            <b-row>
                <b-col md="6" class="my-1">
                    <b-form-group horizontal label="Filter" class="mb-0">
                        <b-input-group>
                            <b-form-input v-model="filter" placeholder="Type to Search" />
                            <b-input-group-append>
                            <b-btn style="z-index:0" :disabled="!filter" @click="filter = ''">Clear</b-btn>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" class="my-1">
                    <b-form-group horizontal label="Sort" class="mb-0">
                        <b-input-group>
                            <b-form-select v-model="sortBy" :options="sortOptions">
                            <option slot="first" :value="null">-- none --</option>
                            </b-form-select>
                            <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
                            <option :value="false">Asc</option>
                            <option :value="true">Desc</option>
                            </b-form-select>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" class="my-1">
                    <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
                </b-col>
                <b-col md="6" class="my-1">
                    <b-form-group horizontal label="Per page" class="mb-0">
                    <b-form-select :options="pageOptions" v-model="perPage" />
                    </b-form-group>
                </b-col>
            </b-row>

            <!-- Main table element -->
            <b-table show-empty
                    stacked="md"
                    :items="factories"
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                    :filter="filter"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    @filtered="onFiltered">
                <template slot="name" slot-scope="row">{{row.value}}</template>
                <template slot="isActive" slot-scope="row">{{row.value?'Yes :)':'No :('}}</template>
                <template slot="actions" slot-scope="row">
                    <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
                    <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
                    Info modal
                    </b-button>
                    <b-button class="factory-detail-toggle" size="sm" @click.stop="row.toggleDetails" @click="selectFactory(row.item, row.index, $event.target)">
                    {{ row.detailsShowing ? 'Collapse' : 'Expand' }}
                    </b-button>
                </template>
                <!-- Expanded row info -->
                <template slot="row-details" slot-scope="row">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <b-form-group horizontal label="Factory:" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="selected_factory.factory_name" type="text" placeholder=""/>
                                    <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''" style="z-index:0">Clear</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <b-form-group horizontal label="Industry:" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="selected_factory.industry" type="text" placeholder=""/>
                                    <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''" style="z-index:0">Clear</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <b-form-group horizontal label="Physical Address:" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="selected_factory.physical_address" type="text" placeholder=""/>
                                    <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''" style="z-index:0">Clear</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>    
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <b-form-group horizontal label="Tel No.:" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="selected_factory.tel" type="text" placeholder=""/>
                                    <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''" style="z-index:0">Clear</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <b-form-group horizontal label="eMail Address:" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="selected_factory.email" type="text" placeholder=""/>
                                    <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''" style="z-index:0">Clear</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <b-form-group horizontal label="Date Est.:" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="selected_factory.date_established" type="date" placeholder=""/>
                                    <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''" style="z-index:0">Clear</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <b-form-group horizontal label="Registration No.:" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="selected_factory.registration_number" type="text" placeholder=""/>
                                    <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''" style="z-index:0">Clear</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <b-form-group horizontal label="Tax No.:" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="selected_factory.tax_number" type="text" placeholder=""/>
                                    <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''" style="z-index:0">Clear</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <b-form-group horizontal label="Delivery Range:" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="selected_factory.delivery_range" type="text" placeholder=""/>
                                    <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''" style="z-index:0">Clear</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <b-form-group horizontal label="Delivery Min Order Cost:" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="selected_factory.delivery_min_order_cost" type="text" placeholder=""/>
                                    <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''" style="z-index:0">Clear</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <b-form-group horizontal label="Rating:" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="selected_factory.rating" type="text" placeholder=""/>
                                    <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''" style="z-index:0">Clear</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <b-form-group horizontal label="Visits:" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="selected_factory.visits" type="text" placeholder=""/>
                                    <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''" style="z-index:0">Clear</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </div>
                    </div>
                    <!-- <b-form-group horizontal label="Currency: " class="mb-0">
                        <b-input-group>
                            <b-form-input v-model="selected_factory.currency" type="text" placeholder=""/>
                            <b-input-group-append>
                            <b-btn :disabled="!filter" @click="filter = ''" style="z-index:0">Clear</b-btn>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group> -->
                </template>
            </b-table>

            <!-- Info modal -->
            <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
                <pre>{{ modalInfo.content }}</pre>
            </b-modal>
        </b-container>
    </div>
</template>

<style>
body
{
    background-color:#7e7e7e;
}
.modal-backdrop
{
    display: none;
}
</style>

<script>
import Masthead from '../Masthead.vue'
import { HttpClient } from '../../assets/js/HttpClient.js'
import SessionManager from '../../assets/js/SessionManager.js'

const factories =
[
  { factory_name: 'Factory01', industry: 'jewelery', physical_address: 'Johannesburg', email: 'default@email.com',
    registration_number:'N/A', tax_number: 'N/A', delivery_range: 140.5, date_established: 0, date_joined: 0, isActive: true, visits: 40, sales: 30},
    { factory_name: 'Factory02', industry: 'electronics', physical_address: 'Cape Town', email: 'default@email.com',
    registration_number:'N/A', tax_number: 'N/A', delivery_range: 100.0, date_established: 0, date_joined: 0, isActive: true, visits: 400, sales: 340},
    { factory_name: 'Factory03', industry: 'hardware', physical_address: 'Durban', email: 'default@email.com',
    registration_number:'N/A', tax_number: 'N/A', delivery_range: 100.0, date_established: 0, date_joined: 0, isActive: true, visits: 400, sales: 340, _rowVariant: 'success'},
    { factory_name: 'Factory04', industry: 'pottery', physical_address: 'Pretoria', email: 'default@email.com',
    registration_number:'N/A', tax_number: 'N/A', delivery_range: 100.0, date_established: 0, date_joined: 0, isActive: true, visits: 400, sales: 340,_cellVariants: { range: 'danger', sales: 'warning' }},
];

export default
{
    components: { Masthead },
    data()
    {
        return {
            newFactory:
            {
                factory_name: 'Factory05',
                industry: 'electronics',
                physical_address: '10 Mandela drive, Newtown, Johannesburg, South Africa',
                email: 'default@email.com',
                tel: '0',
                registration_number: '',
                tax_number: '',
                delivery_range: 0.0,
                delivery_min_order_cost: 0.0,
                date_established: 0,
                date_logged: 0,
                rating: 0,
                status: 0,
                visits: 0,
                sales: 0
            },
            factories: factories,
            fields:
            [
                { key: 'factory_name', label: 'Factory name', sortable: true },
                { key: 'industry', label: 'Industry', sortable: true },
                { key: 'physical_address', label: 'Physical Address', sortable: true },
                { key: 'email', label: 'eMail', sortable: true },
                { key: 'tel', label: 'Tel Number', sortable: true },
                // { key: 'registration_number', label: 'Registration No.', sortable: true },
                // { key: 'tax_number', label: 'Tax No.', sortable: true },
                // { key: 'delivery_range', label: 'Delivery Range', sortable: true },
                // { key: 'delivery_min_order_cost', label: 'Min order for delivery', sortable: true },
                // { key: 'date_established', label: 'Date Established', sortable: true },
                { key: 'date_logged', label: 'Date Joined', sortable: true },
                { key: 'visits', label: 'Visits', sortable: true, 'class': 'text-center' },
                { key: 'sales', label: 'Sale Count', sortable: true, 'class': 'text-center' },
                // { key: 'isActive', label: 'is Active' },
                { key: 'actions', label: 'Actions' }
            ],
            currentPage: 1,
            perPage: 5,
            totalRows: factories.length,
            pageOptions: [ 5, 10, 15 ],
            sortBy: null,
            sortDesc: false,
            filter: null,
            modalInfo: { title: '', content: '' }
        }
    },
    computed:
    {
        sortOptions()
        {
            // Create an options list from our fields
            return this.fields
                .filter(f => f.sortable)
                .map(f => { return { text: f.label, value: f.key } })
        }
    },
    methods:
    {
        info (item, index, button)
        {
            this.modalInfo.title = `Row index: ${index}`
            this.modalInfo.content = JSON.stringify(item, null, 2)
            this.$root.$emit('bv::show::modal', 'modalInfo', button)
        },
        selectFactory(item, index, button)
        {
            var toggles = document.querySelectorAll('.factory-detail-toggle');
            toggles.forEach(element =>
            {
                var btn_text = element.innerText;
                // console.log(btn_text.toLowerCase);
               // make sure there's only ever one row expanded
                if(element!=button)//ignore current button
                    if(btn_text.toLowerCase() == 'hide details')
                        element.click();//click hide button if showing
               // this.$root.$emit('click')
            });
            this.selected_factory =  item;
            // alert(JSON.stringify(this.selected_factory));
        },
        resetModal ()
        {
            this.modalInfo.title = ''
            this.modalInfo.content = ''
        },
        onFiltered (filteredItems)
        {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length
            this.currentPage = 1
        },
        addFactory()
        {
            this.$validator.validateAll().then((result) =>
            {
                if (result)
                {
                    // make an asynchronous call to create the product
                    var date_established = new Date(this.newFactory.date_established);
                    this.newFactory.date_established = date_established.getTime();
                    this.newFactory.creator = SessionManager.getSessionUser().usr;
                    this.newFactory.date_logged = new Date().getTime();

                    // const HttpClient = require('../../assets/js/HttpClient.js');
                    // update session_id
                    // HttpClient.defaults.headers['session_id'] = this.session_id;

                    // PUT http://localhost:8080/factory
                    HttpClient.put('/factory', this.newFactory)
                        .then(response =>
                        {
                            console.log(response);
                            alert('Successfully created new factory.');
                            // this.newFactory.date_established = str_date_est;// so that HTML5 can parse the date for the date picker
                        }).catch(err =>
                        {
                            // this.errors.push(err);
                            alert(err);
                        });
                    return;
                }
                // alert('Please correct the displayed errors.');
            });
        },
        removeFactory(id)
        {
            this.factories.splice(id,1);
        },
        newProduct(src)
        {
          
        },
        commitFactoryProduct()
        {
          let brand_name = document.getElementById("new_prod_brand").value; // $("#new_prod_brand").value;
          let product_description = document.getElementById("new_prod_desc").value;
          let product_cost = document.getElementById("new_prod_cost").value;
          let product_unit = document.getElementById("new_prod_unit").value;
          let product_serial_code = document.getElementById("new_prod_serial").value;
          let product_model = document.getElementById("new_prod_model").value;
          let product_category = document.getElementById("new_prod_cat").value;

          //create urlencoded string representation of the product to be created
          let obj = encodeURIComponent("brand_name") + "=" + encodeURIComponent(brand_name) + "&"
                  + encodeURIComponent("product_description") + "=" + encodeURIComponent(product_description) + "&"
                  + encodeURIComponent("product_cost") + "=" + encodeURIComponent(product_cost) + "&"
                  + encodeURIComponent("product_unit") + "=" + encodeURIComponent(product_unit) + "&"
                  + encodeURIComponent("product_serial_code") + "=" + encodeURIComponent(product_serial_code) + "&"
                  + encodeURIComponent("product_model") + "=" + encodeURIComponent(product_model) + "&"
                  + encodeURIComponent("product_category") + "=" + encodeURIComponent(product_category);

          document.cookie = "fs_selected_product::=" + obj.toString();//.replaceAll("&",";");
        }
    },
    mounted:function()
            {
                var masthead = document.querySelector('.masthead');
                //masthead.style.position = 'absolute';
                masthead.style.marginTop = "-600px";

                //check if session_id is set
                if(this.session_id)
                {
                    //check if session_id hasn't expired
                    //load factory data from server
                }
            }
}
</script>
