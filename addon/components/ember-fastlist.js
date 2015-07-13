import Ember from 'ember';

export default Ember.Component.extend({
    classNames: [ 'main-desktop-switcher' ],

    actions: {
        switch(desktop) {
            this.sendAction('action', desktop);
        }
    },

    init() {
      this._super();

      console.log('init!');
    },

    mouseUp(event) {
        // There's a second mouseup handler in window-grid component. That handler manages
        // activeDraggedWindow property. This setup should still be safe because mouseup event
        // bubble first here and then in window-grid. Thus no race condition.
        console.log('jay');
    }
});
