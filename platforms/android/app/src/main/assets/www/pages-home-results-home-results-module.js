(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-results-home-results-module"],{

/***/ "./src/app/components/popmenu/popmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"animated fadeInDown\">\n  <ion-fab-button (click)=\"togglePopupMenu()\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-icon name=\"apps\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<div class=\"popup-menu\">\n  <div class=\"popup-menu-overlay\" [ngClass]=\"{'in': openMenu}\"></div>\n  <div class=\"popup-menu-panel\" [ngClass]=\"{'in': openMenu}\">\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"cog\" slot=\"middle\" size=\"large\"></ion-icon>\n      <span>Config</span>\n    </div>\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"beer\" slot=\"middle\" size=\"large\"></ion-icon>\n      <span>Activities</span>\n    </div>\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"person\" slot=\"middle\" size=\"large\"></ion-icon>\n      <span>Settings</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup-menu-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(79, 36, 172, 0.85) 0%, rgba(79, 36, 172, 0.65) 100%);\n}\n.popup-menu-overlay.in {\n  opacity: 1;\n  visibility: visible;\n}\n.popup-menu-toggle {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 10px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  z-index: 101;\n  transition: all 0.25s ease-in-out;\n}\n.popup-menu-toggle.out {\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(0);\n  transition: all 0.15s ease-in-out;\n}\n.popup-menu-toggle.out:before {\n  transition: all 0.15s ease-in-out;\n  transform: scale(0);\n}\n.popup-menu-panel {\n  position: fixed;\n  width: 300px;\n  border-radius: 5%;\n  bottom: 80px;\n  left: 50%;\n  margin-left: -150px;\n  padding: 20px;\n  background-color: var(--ion-color-primary);\n  z-index: 102;\n  transition: all 0.25s ease-in-out;\n  transition-delay: 0.15s;\n  transform-origin: 50% 100%;\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap;\n}\n.popup-menu-panel .popup-menu-item {\n  margin: auto;\n  -moz-flex: 1 0 30%;\n  flex: 1 0 30%;\n  display: -moz-flex;\n  display: flex;\n  -moz-flex-direction: column;\n  flex-direction: column;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.25s ease-in-out;\n}\n.popup-menu-panel .popup-menu-item ion-icon {\n  margin: 0 auto;\n  text-align: center;\n  color: #fff;\n}\n.popup-menu-panel .popup-menu-item span {\n  padding: 0;\n  margin: 0 0 auto 0;\n  color: #fff;\n  text-align: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 500;\n  line-height: 18px;\n}\n.popup-menu-panel .popup-menu-item:active i {\n  color: rgb(221, 65, 53);\n  transition: all 0.15s;\n}\n.popup-menu-panel .popup-menu-item:active span {\n  color: rgb(221, 65, 53);\n  transition: all 0.15s;\n}\n.popup-menu-panel.in {\n  transform: scale(1);\n  transition-delay: 0s;\n}\n.popup-menu-panel.in .popup-menu-item {\n  transform: scale(1);\n  opacity: 1;\n  transition-delay: 0.15s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2hhbW1lZGltdGhpeWFzL0RvY3VtZW50cy9CbG9vZGJhbmtfYXBwL3NyYy9hcHAvY29tcG9uZW50cy9wb3BtZW51L3BvcG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9wbWVudS9wb3BtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBRUEsaUNBQUE7RUFFQSwyRkFBQTtBQ0FKO0FEQ0k7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREdBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsaUNBQUE7QUNBSjtBRENJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFFQSxpQ0FBQTtBQ0NSO0FEQVE7RUFFSSxpQ0FBQTtFQUVBLG1CQUFBO0FDRVo7QURHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUVBLGlDQUFBO0VBRUEsdUJBQUE7RUFFQSwwQkFBQTtFQUVBLG1CQUFBO0VBSUEsa0JBQUE7RUFFQSxhQUFBO0VBSUEsZUFBQTtBQ0RKO0FERUk7RUFDSSxZQUFBO0VBSUEsa0JBQUE7RUFFQSxhQUFBO0VBSUEsa0JBQUE7RUFFQSxhQUFBO0VBSUEsMkJBQUE7RUFFQSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUVBLGlDQUFBO0FDQVI7QURDUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDWjtBRENRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NaO0FERVk7RUFDSSx1QkFBQTtFQUVBLHFCQUFBO0FDQWhCO0FERVk7RUFDSSx1QkFBQTtFQUVBLHFCQUFBO0FDQWhCO0FESUk7RUFFSSxtQkFBQTtFQUVBLG9CQUFBO0FDRlI7QURHUTtFQUVJLG1CQUFBO0VBQ0EsVUFBQTtFQUVBLHVCQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcG1lbnUvcG9wbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBvcHVwIE1lbnUgLy9cbi5wb3B1cC1tZW51LW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDc5LDM2LDE3MiwgLjg1KSAwJSwgcmdiYSg3OSwzNiwxNzIsIC42NSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNzksMzYsMTcyLCAuODUpIDAlLCByZ2JhKDc5LDM2LDE3MiwgLjY1KSAxMDAlKTtcbiAgICAmLmluIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG59XG5cbi5wb3B1cC1tZW51LXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDEwMTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICYub3V0IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucG9wdXAtbWVudS1wYW5lbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAzMDBweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGJvdHRvbTogODBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB6LWluZGV4OiAxMDI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjE1cztcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAtbW96LWZsZXgtd3JhcDogd3JhcDtcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAucG9wdXAtbWVudS1pdGVtIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxIDAgMzAlO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDEgMCAzMCU7XG4gICAgICAgIC1tb3otYm94LWZsZXg6IDEgMCAzMCU7XG4gICAgICAgIC1tb3otZmxleDogMSAwIDMwJTtcbiAgICAgICAgLW1zLWZsZXg6IDEgMCAzMCU7XG4gICAgICAgIGZsZXg6IDEgMCAzMCU7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIGF1dG8gMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDIyMSw2NSw1Myk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDIyMSw2NSw1Myk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmluIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgLnBvcHVwLW1lbnUtaXRlbSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogLjE1cztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIucG9wdXAtbWVudS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDc5LCAzNiwgMTcyLCAwLjg1KSAwJSwgcmdiYSg3OSwgMzYsIDE3MiwgMC42NSkgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDc5LCAzNiwgMTcyLCAwLjg1KSAwJSwgcmdiYSg3OSwgMzYsIDE3MiwgMC42NSkgMTAwJSk7XG59XG4ucG9wdXAtbWVudS1vdmVybGF5LmluIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dDpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5wb3B1cC1tZW51LXBhbmVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBib3R0b206IDgwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB6LWluZGV4OiAxMDI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tb3otZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtIHtcbiAgbWFyZ2luOiBhdXRvO1xuICAtd2Via2l0LWJveC1mbGV4OiAxIDAgMzAlO1xuICAtd2Via2l0LWZsZXg6IDEgMCAzMCU7XG4gIC1tb3otYm94LWZsZXg6IDEgMCAzMCU7XG4gIC1tb3otZmxleDogMSAwIDMwJTtcbiAgLW1zLWZsZXg6IDEgMCAzMCU7XG4gIGZsZXg6IDEgMCAzMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtIGlvbi1pY29uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtIHNwYW4ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCBhdXRvIDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtOmFjdGl2ZSBpIHtcbiAgY29sb3I6IHJnYigyMjEsIDY1LCA1Myk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtOmFjdGl2ZSBzcGFuIHtcbiAgY29sb3I6IHJnYigyMjEsIDY1LCA1Myk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG4ucG9wdXAtbWVudS1wYW5lbC5pbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG59XG4ucG9wdXAtbWVudS1wYW5lbC5pbiAucG9wdXAtbWVudS1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: PopmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopmenuComponent", function() { return PopmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopmenuComponent = /** @class */ (function () {
    function PopmenuComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.openMenu = false;
    }
    PopmenuComponent.prototype.ngOnInit = function () {
    };
    PopmenuComponent.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    PopmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'popmenu',
            template: __webpack_require__(/*! ./popmenu.component.html */ "./src/app/components/popmenu/popmenu.component.html"),
            styles: [__webpack_require__(/*! ./popmenu.component.scss */ "./src/app/components/popmenu/popmenu.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], PopmenuComponent);
    return PopmenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-results/home-results.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPageModule", function() { return HomeResultsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/popmenu/popmenu.component */ "./src/app/components/popmenu/popmenu.component.ts");
/* harmony import */ var _home_results_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-results.page */ "./src/app/pages/home-results/home-results.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _home_results_page__WEBPACK_IMPORTED_MODULE_6__["HomeResultsPage"]
    }
];
var HomeResultsPageModule = /** @class */ (function () {
    function HomeResultsPageModule() {
    }
    HomeResultsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_results_page__WEBPACK_IMPORTED_MODULE_6__["HomeResultsPage"], _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_5__["PopmenuComponent"]]
        })
    ], HomeResultsPageModule);
    return HomeResultsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-text color=\"light\">\n          <ion-text color=\"light\" class=\"fw700\">Home</ion-text>\n        </ion-text>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"notifications()\">\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-badge color=\"dark\" slot=\"end\">2</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n  <ion-card class=\"bg-white\" *ngIf=\"user_type == 'FO'\" style=\"height: 600px; padding: 10px;\">\n    <ion-button *ngIf=\"!show_present\" margin shape=\"round\" expand=\"full\" color=\"secondary\" (click)=\"markaspresent()\">\n      Mark As Present\n    </ion-button>\n    <ion-button  *ngIf=\"show_present\" margin shape=\"round\" expand=\"full\" color=\"primary\">\n      PRESENT\n    </ion-button>\n    <div class=\"row\" >\n      <p> <span class=\"lables\"> Name : </span> Mohammed Imthiyas</p>\n      <p> <span class=\"lables\"> Date : </span> 23-10-2020</p>\n    <h3>Shift Type</h3>\n    </div>\n    <div class=\"tab1cards\">\n      <div class=\"card\" style=\"background-color:#3880ff;\" (click)=\"site_detail()\">\n        <p><i class=\"fa-solid fa-sun\"></i></p>\n        <p>SHIFT 1 <br><span style=\"font-size: 11px;\">06:00 AM - 01:00 PM</span></p>\n      </div>\n      <div class=\"card\" style=\"background-color:#dc6b2f;\" (click)=\"site_detail()\">\n        <p><i class=\"fa-solid fa-sun\"></i></p>\n        <p>SHIFT 2 <br><span style=\"font-size: 11px;\">01:00 PM - 09:00 PM</span></p>\n      </div>\n      <div class=\"card\" style=\"background-color:#9c27b0;\" (click)=\"site_detail()\">\n        <p><i class=\"fa-solid fa-sun\"></i></p>\n        <p>SHIFT 3 <br><span style=\"font-size: 11px;\">09:00 PM - 06:00 AM</span></p>\n      </div>\n    </div>\n    <ion-button  margin shape=\"round\" expand=\"full\" color=\"secondary\" (click)=\"allocation()\">\n      Temp Allocation\n    </ion-button>\n  </ion-card>\n\n\n  <ion-card class=\"bg-white\" *ngIf=\"user_type == 'SO'\" style=\"height: 600px; padding: 10px;\">\n    <ion-button *ngIf=\"!show_present\" margin shape=\"round\" expand=\"full\" color=\"secondary\" (click)=\"markaspresent()\">\n      Mark As Present\n    </ion-button>\n    <ion-button  *ngIf=\"show_present\" margin shape=\"round\" expand=\"full\" color=\"primary\">\n      PRESENT\n    </ion-button>\n    <div class=\"\" style=\"margin-left: 10px;\">\n    <p> <span class=\"lables\"> Name : </span> Johnson Anna Nage 0091</p>\n    <p> <span class=\"lables\"> Date : </span> 23-10-2020 12:00:11 AM</p>\n    </div>\n    <div class=\"row\" >\n    <h3>Shift Type</h3>\n    </div>\n    <div class=\"tab1cards\">\n      <div class=\"card\" style=\"background-color:#3880ff;\" (click)=\"datewise()\">\n        <p><i class=\"fa-solid fa-sun\"></i></p>\n        <p>SHIFT 1 <br><span style=\"font-size: 11px;\">06:00 AM - 01:00 PM</span></p>\n      </div>\n       \n      <div class=\"card\" style=\"background-color:#dc6b2f;\" (click)=\"datewise()\">\n        <p><i class=\"fa-solid fa-sun\"></i></p>\n        <p>SHIFT 2 <br><span style=\"font-size: 11px;\">01:00 PM - 09:00 PM</span></p>\n      </div>\n      <div class=\"card\" style=\"background-color:#9c27b0;\" (click)=\"datewise()\">\n        <p><i class=\"fa-solid fa-sun\"></i></p>\n        <p>SHIFT 3 <br><span style=\"font-size: 11px;\">09:00 PM - 06:00 AM</span></p>\n      </div>\n    </div>\n    <ion-button margin shape=\"round\" expand=\"full\" color=\"secondary\" (click)=\"psoviewallstatus()\">\n       Over all People Status\n    </ion-button>\n\n    <!-- <div class=\"overlay\" >\n      <div class=\"popup\">\n        <h2>Confirmation</h2>\n        <a class=\"close\" (click)=\"popup = false\">&times;</a>\n        <div class=\"content\">\n          Are you sure you want to mark present ?\n        <button (click)=\"mark_present()\" class=\"button_style_primary\">Yes</button>\n        <button (click)=\"popup = false\" class=\"button_style_cancel\">No</button>\n        </div>\n      </div>\n    </div> -->\n\n    <!-- The Modal -->\n<div id=\"myModal\" class=\"modal\" *ngIf=\"popup\">\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <span class=\"close\">&times;</span>\n    <p>Some text in the Modal..</p>\n  </div>\n</div>\n\n\n    \n  </ion-card>\n\n  <ion-card class=\"bg-white\" *ngIf=\"user_type == 'PSO'\" style=\"height: 600px; padding: 10px;\">\n    <ion-button *ngIf=\"!show_present\" margin shape=\"round\" expand=\"full\" color=\"secondary\" (click)=\"markaspresent()\">\n      Mark As Present\n    </ion-button>\n    <ion-button  *ngIf=\"show_present\" margin shape=\"round\" expand=\"full\" color=\"primary\">\n      PRESENT\n    </ion-button>\n\n    <div class=\"\" style=\"margin-left: 10px;\">\n    <p> <span class=\"lables\"> Name : </span> Johnson Anna Nage 0091</p>\n    <p> <span class=\"lables\"> Date : </span> 23-10-2020 12:00:11 AM</p>\n    </div>\n\n\n    <div class=\"row\" >\n    <h3>Shift Type</h3>\n    </div>\n    <div class=\"tab1cards\">\n      <div class=\"card\" style=\"background-color:#3880ff;\" (click)=\"psositedetail()\">\n        <p><i class=\"fa-solid fa-sun\"></i></p>\n       <p>SHIFT 1 <br><span style=\"font-size: 11px;\">06:00 AM - 01:00 PM</span></p>\n      </div>\n      <div class=\"card\" style=\"background-color:#dc6b2f;\" (click)=\"psositedetail()\">\n        <p><i class=\"fa-solid fa-sun\"></i></p>\n        <p>SHIFT 2 <br><span style=\"font-size: 11px;\">01:00 PM - 09:00 PM</span></p>\n      </div>\n      <div class=\"card\" style=\"background-color:#9c27b0;\" (click)=\"psositedetail()\">\n        <p><i class=\"fa-solid fa-sun\"></i></p>\n        <p>SHIFT 3 <br><span style=\"font-size: 11px;\">09:00 PM - 06:00 AM</span></p>\n      </div>\n    </div>\n    <ion-button *ngIf=\"!show_present\" margin shape=\"round\" expand=\"full\" color=\"secondary\" (click)=\"psoviewallstatus()\">\n      Over all People Status\n   </ion-button>\n    <ion-button  margin shape=\"round\" expand=\"full\" color=\"primary\" (click)=\"poshistoryattendance()\">\n      View Attendance History\n    </ion-button>\n  \n  \n  \n  </ion-card>\n\n\n  <popmenu></popmenu>\n</ion-content>\n\n\n\n  "

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcmVzdWx0cy9ob21lLXJlc3VsdHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.ts ***!
  \*********************************************************/
/*! exports provided: HomeResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPage", function() { return HomeResultsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/modal/search-filter/search-filter.page */ "./src/app/pages/modal/search-filter/search-filter.page.ts");
/* harmony import */ var _modal_image_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../modal/image/image.page */ "./src/app/pages/modal/image/image.page.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// Modals


// Call notifications test by Popover and Custom Component.


var HomeResultsPage = /** @class */ (function () {
    function HomeResultsPage(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.searchKey = '';
        this.yourLocation = '123 Test Street';
        this.themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
        this.show_present = false;
        this.popup = false;
        this.user_type = 'FO';
        this.usertypes = this.storage.get('user_type');
        console.log(this.usertypes);
    }
    HomeResultsPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    HomeResultsPage.prototype.settings = function () {
        this.navCtrl.navigateForward('settings');
    };
    HomeResultsPage.prototype.alertLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var changeLocation;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Change Location',
                            message: 'Type your Address.',
                            inputs: [
                                {
                                    name: 'location',
                                    placeholder: 'Enter your new Location',
                                    type: 'text'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Change',
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var toast;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log('Change clicked', data);
                                                    this.yourLocation = data.location;
                                                    return [4 /*yield*/, this.toastCtrl.create({
                                                            message: 'Location was change successfully',
                                                            duration: 3000,
                                                            position: 'top',
                                                            closeButtonText: 'OK',
                                                            showCloseButton: true
                                                        })];
                                                case 1:
                                                    toast = _a.sent();
                                                    toast.present();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        changeLocation = _a.sent();
                        changeLocation.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeResultsPage.prototype.searchFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_2__["SearchFilterPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.presentImage = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_image_image_page__WEBPACK_IMPORTED_MODULE_3__["ImagePage"],
                            componentProps: { value: image }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.notifications = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"],
                            event: ev,
                            animated: true,
                            showBackdrop: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.site_detail = function () {
        this.navCtrl.navigateForward('fositelisting');
    };
    HomeResultsPage.prototype.markaspresent = function () {
        this.popup = true;
    };
    HomeResultsPage.prototype.allocation = function () {
        this.navCtrl.navigateForward('foallocationrequest');
    };
    HomeResultsPage.prototype.datewise = function () {
        this.navCtrl.navigateForward('fodatewise');
    };
    HomeResultsPage.prototype.psositedetail = function () {
        this.navCtrl.navigateForward('psositedetail');
    };
    HomeResultsPage.prototype.poshistoryattendance = function () {
        this.navCtrl.navigateForward('poshistoryattendance');
    };
    HomeResultsPage.prototype.psoviewallstatus = function () {
        this.navCtrl.navigateForward('psoviewallstatus');
    };
    HomeResultsPage.prototype.mark_present = function () {
        this.show_present = true;
    };
    HomeResultsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-results',
            template: __webpack_require__(/*! ./home-results.page.html */ "./src/app/pages/home-results/home-results.page.html"),
            styles: [__webpack_require__(/*! ./home-results.page.scss */ "./src/app/pages/home-results/home-results.page.scss")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], Object])
    ], HomeResultsPage);
    return HomeResultsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-results-home-results-module.js.map