Ext.define('STTemplate.model.Model', {

	extend: 'Ext.data.Model',

	config: {
		fields: [
			'id',
			{
				name: 'the_date',
				type: 'date',
				convert: function(value, record) {
					if (value) {
						var dateArr = value.split(/[\-T:]/);
						return new Date(dateArr[0], dateArr[1] - 1, dateArr[2], 0);
					} else {
						return new Date();
					}
				}
			},
			'name'
		]
	}
	
});
