jQuery(function ($) {

    var CollectionForm = function (widget) {
        var self = this;
        var widget = $(widget);
        var container = $(widget).parent('.collection-container');
        // When the link is clicked we add the field to input another element

        self.removeElement = function(event){
            event.preventDefault();
            $(this).parent().remove();
        };

        self.addElement = function(event){
            event.preventDefault();
            var prototype = widget.attr('data-prototype');
            var form = $(prototype.replace(/__name__/g, widget.children().length));
            var removeButton = form.find('.remove-element');
            removeButton.on('click', self.removeElement);
            widget.append(form);
        };

        container.find('.add-element').on('click', self.addElement);
        widget.find('.remove-element').on('click', self.removeElement);
    };
    $.fn.collectionForm = function (options) {
        return this.each(function () {
            new CollectionForm(this);
        });
    };

    $('*[data-prototype]').collectionForm();
});