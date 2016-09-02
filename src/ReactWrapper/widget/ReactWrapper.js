/*global logger*/
/*
    ReactWrapper
    ========================

    @file      : ReactWrapper.js
    @version   : 1.0.0
    @author    : Conner Charlebois
    @date      : 9/1/2016
    @copyright : Mendix 2016
    @license   : Apache 2

    Documentation
    ========================
    Describe your widget here.
*/

// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",

    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event",
    // "dojo/dojo-jsx",

    "ReactWrapper/lib/jquery-1.11.2",
    "ReactWrapper/lib/react",
    "ReactWrapper/lib/react-dom",
    "ReactWrapper/lib/babel",
    "dojo/text!ReactWrapper/lib/components/Test.jsx",
    // "ReactWrapper/lib/babel!ReactWrapper/lib/components/Test.jsx",
    "dojo/text!ReactWrapper/widget/template/ReactWrapper.html"
], function(declare, _WidgetBase, _TemplatedMixin, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, dojoLang, dojoText, dojoHtml, dojoEvent, _jQuery, React, ReactDOM, Babel, Test, widgetTemplate) {
    "use strict";

    var $ = _jQuery.noConflict(true);

    // Declare widget's prototype.
    return declare("ReactWrapper.widget.ReactWrapper", [_WidgetBase, _TemplatedMixin], {
        // _TemplatedMixin will create our dom node using this HTML template.
        templateString: widgetTemplate,


        // DOM elements
        // inputNodes: null,

        // Parameters configured in the Modeler.
        // mfToExecute: "",

        // Internal variables. Non-primitives created in the prototype are shared between all widget instances.
        _handles: null,
        _contextObj: null,
        _alertDiv: null,
        _readOnly: false,

        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function() {
            logger.debug(this.id + ".constructor");

            this._handles = [];
        },

        // dijit._WidgetBase.postCreate is called after constructing the widget. Implement to do extra setup work.
        postCreate: function() {
            logger.debug(this.id + ".postCreate");
            // $.ajax({
            //   url:document.getElementById('testjsx').src,
            //   success:function(data){
            //     // console.log(Babel.transform(data, {presets:['react']}).code)
            //     eval(Babel.transform(data, {presets:['react']}).code)
            //   }
            // })
            // console.log(Test);
            eval(Babel.transform(Test, {presets:['react']}).code)
            // console.log(Babel.transform(document.getElementById('testjsx').src, {presets:['react']}).code)



            // console.log(Babel)
            // console.log(Babel.transform('/widgets/ReactWrapper/lib/components/Test.jsx', {presets: ['es2015']}).code)
            // Babel.transform()
            // new
            // ReactDOM.render(test, $('body'))




            // var self = this;
            //
            // var Comment = React.createClass({
            //     displayName: 'Comment',
            //     render: function() {
            //         return (
            //             React.createElement('div', {
            //                     className: 'comment'
            //                 },
            //                 React.createElement('h2', {
            //                     className: 'commentAuthor'
            //                 }, this.props.author),
            //                 this.props.text
            //             )
            //         );
            //     }
            // });
            // var CommentList = React.createClass({
            //     displayName: 'CommentList',
            //     comments: function() {
            //         return this.props.comments.map(function(c) {
            //             return React.createElement(Comment, {
            //                 author: c.author,
            //                 text: c.text,
            //                 key: c.number
            //             })
            //         })
            //     },
            //     render: function() {
            //         return (
            //             React.createElement('div', null, this.comments())
            //         )
            //     }
            // });
            // var CommentForm = React.createClass({
            //     displayName: 'CommentForm',
            //     getInitialState: function() {
            //         return {
            //             author: '',
            //             text: ''
            //         };
            //     },
            //     handleAuthorChange: function(e) {
            //         this.setState({
            //             author: e.target.value
            //         });
            //     },
            //     handleTextChange: function(e) {
            //         this.setState({
            //             text: e.target.value
            //         });
            //     },
            //     handleSubmit: function(e) {
            //         e.preventDefault();
            //         var author = this.state.author.trim();
            //         var text = this.state.text.trim();
            //         if (!text || !author) {
            //             return;
            //         }
            //         this.props.onCommentSubmit({
            //             author: author,
            //             text: text
            //         });
            //         this.setState({
            //             author: '',
            //             text: ''
            //         });
            //         console.log('starting mf')
            //         mx.ui.action('TestSuite.IVK_test');
            //     },
            //     render: function() {
            //         return (
            //             // React.createElement('div', null, "I am a CommentForm")
            //             React.createElement('form', {
            //                     className: 'commentForm',
            //                     onSubmit: this.handleSubmit
            //                 },
            //                 React.createElement('input', {
            //                     type: 'text',
            //                     value: this.state.author,
            //                     onChange: this.handleAuthorChange
            //                 }),
            //                 React.createElement('input', {
            //                     type: 'text',
            //                     value: this.state.text,
            //                     onChange: this.handleTextChange
            //                 }),
            //                 React.createElement('input', {
            //                     type: 'submit',
            //                     value: 'post'
            //                 })
            //             )
            //             // <form className="commentForm">
            //             //   <input type="text" placeholder="Your name" />
            //             //   <input type="text" placeholder="Say something..." />
            //             //   <input type="submit" value="Post" />
            //             // </form>
            //         )
            //     }
            // });
            // var CommentBox = React.createClass({
            //     displayName: 'CommentBox',
            //     getInitialState: function() {
            //         return {
            //             data: [{
            //                 number: 1,
            //                 author: 'Conner',
            //                 text: 'some comment'
            //             }, {
            //                 number: 2,
            //                 author: 'Joe',
            //                 text: 'some other comment'
            //             }]
            //         };
            //     },
            //     handleCommentSubmit: function(newComment) {
            //         newComment.number = Math.random() * 10000
            //         var comments = this.state.data;
            //         comments.push(newComment)
            //         this.setState(comments)
            //     },
            //     render: function() {
            //         return (
            //             React.createElement('div', {
            //                     className: "commentBox"
            //                 },
            //                 React.createElement('h1', null, 'Comments'),
            //                 React.createElement(CommentList, {
            //                     comments: this.state.data
            //                 }),
            //                 React.createElement(CommentForm, {
            //                     onCommentSubmit: this.handleCommentSubmit
            //                 })
            //             )
            //         );
            //     }
            // });
            //
            // ReactDOM.render(
            //     React.createElement(CommentBox, null),
            //     document.getElementById("mx-react-content")
            // );

            this._updateRendering();
            this._setupEvents();
        },

        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function(obj, callback) {
            logger.debug(this.id + ".update");

            this._contextObj = obj;
            this._resetSubscriptions();
            this._updateRendering(callback); // We're passing the callback to updateRendering to be called after DOM-manipulation
        },

        // mxui.widget._WidgetBase.enable is called when the widget should enable editing. Implement to enable editing if widget is input widget.
        enable: function() {
            logger.debug(this.id + ".enable");
        },

        // mxui.widget._WidgetBase.enable is called when the widget should disable editing. Implement to disable editing if widget is input widget.
        disable: function() {
            logger.debug(this.id + ".disable");
        },

        // mxui.widget._WidgetBase.resize is called when the page's layout is recalculated. Implement to do sizing calculations. Prefer using CSS instead.
        resize: function(box) {
            logger.debug(this.id + ".resize");
        },

        // mxui.widget._WidgetBase.uninitialize is called when the widget is destroyed. Implement to do special tear-down work.
        uninitialize: function() {
            logger.debug(this.id + ".uninitialize");
            // Clean up listeners, helper objects, etc. There is no need to remove listeners added with this.connect / this.subscribe / this.own.
        },

        // We want to stop events on a mobile device
        _stopBubblingEventOnMobile: function(e) {
            logger.debug(this.id + "._stopBubblingEventOnMobile");
            if (typeof document.ontouchstart !== "undefined") {
                dojoEvent.stop(e);
            }
        },

        // Attach events to HTML dom elements
        _setupEvents: function() {
            logger.debug(this.id + "._setupEvents");
        },

        // Rerender the interface.
        _updateRendering: function(callback) {
            logger.debug(this.id + "._updateRendering");


            // Important to clear all validations!
            this._clearValidations();

            // The callback, coming from update, needs to be executed, to let the page know it finished rendering
            mendix.lang.nullExec(callback);
        },

        // Handle validations.
        _handleValidation: function(validations) {
            logger.debug(this.id + "._handleValidation");
            this._clearValidations();


        },

        // Clear validations.
        _clearValidations: function() {
            logger.debug(this.id + "._clearValidations");

        },

        // Show an error message.
        _showError: function(message) {
            logger.debug(this.id + "._showError");

        },

        // Add a validation.
        _addValidation: function(message) {
            logger.debug(this.id + "._addValidation");
            this._showError(message);
        },

        _unsubscribe: function() {
            if (this._handles) {
                dojoArray.forEach(this._handles, function(handle) {
                    mx.data.unsubscribe(handle);
                });
                this._handles = [];
            }
        },

        // Reset subscriptions.
        _resetSubscriptions: function() {
            logger.debug(this.id + "._resetSubscriptions");
            // Release handles on previous object, if any.
            this._unsubscribe();

            // When a mendix object exists create subscribtions.

        }
    });
});

require(["ReactWrapper/widget/ReactWrapper"]);
// require.config({paths:{jsx:'/widgets/ReactWrapper/lib/babel'}})
