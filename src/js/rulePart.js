(function() {
    if (window.Vue === undefined) {
        console.error("请引入Vue");
    }
    window.MDMComponents = window.MDMComponents || {};
    var RulePart = window.MDMComponents.RulePart = {
        name: "MdmRulePart",
        template: "#RulePartTpl",
        data: function() {
            return {
                // sourceOptions: [],
                partForm: {
                    type: "number",
                    rangeLower: 1,
                    rangeUpper: 99,
                    length: 2,
                    delimiter: "_",
                    inputType: "auto"
                },
                referenceRules:{
                    originIds:[
                        { required: true, message:'请选择引用来源', trigger: 'change'},
                       // {validator: this.validateReference, trigger: 'change'}
                    ]
                },
                types:[
                    {label:'reference',name:'引用'},
                    {label:'number',name:'数字' },
                    {label:'letter',name:'字母'}],
            }
        },
        props: {
            title: String,
            index:{
                type: Number,
                required: true
            },
            value: {
                type: Object,
                required: true
            },
            sourceOptions: {
                type: Array,
                default: function() {
                    return []
                }
            }
        },
        methods: {
            validateReference : function(rule, value, callback){
                console.log(value);
            },
            handleTypeRadioChange: function (value) {
                if (value === "reference") {
                    // this.partForm = {
                    //     type: value,
                    //     originIds: "",
                    //     delimiter: "_"
                    // }
                    this.$set(this.$data, "partForm", {
                        type: value,
                        originIds: "",
                        delimiter: "_"
                    })
                } else if (value === "number") {
                 //   this.referDisabled = true;
                    this.partForm = {
                        type: value,
                        rangeLower: 1,
                        rangeUpper: 99,
                        length: 2,
                        delimiter: "_",
                        inputType: "auto",
                    }
                } else if (value === "letter") {
                  //  this.referDisabled = true;
                    this.partForm = {
                        type: value,
                        length: 2,
                        inputType: "manual",
                        delimiter: "_",
                    }
                }
            }
        },
        watch: {
            partForm: {
                deep: true,
                // immediate: true,
                handler: function(newVal, oldVal) {
                    if (this.$kun.isEqual(newVal, oldVal)) {
                        return
                    } else {
                        this.$emit("input", newVal);
                    }
                }
            },
            value: {
                deep: true,
                immediate: true,
                handler: function(newVal) {
                    this.partForm = newVal;
                }
            },
            index: {
                deep: true,
                immediate: true,
                handler: function(newVal,oldVal) {
                    if(newVal!=0){
                        this.types=[{label:'number',name:'数字',key:Math.random() + ""},{label:'letter',name:'字母',key:Math.random() + ""}];
                    }
                }
            },

        }
    };
    Vue.component(RulePart.name, RulePart);
})();