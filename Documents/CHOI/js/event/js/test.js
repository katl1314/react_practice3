var sampleData5 =  [
    {'city' : '서울', 'sum' : 5378506},
    {'city' : '부산', 'sum' : 1632415},
    {'city' : '대구', 'sum' : 1072583},
    {'city' : '인천', 'sum' : 2211621},
    {'city' : '광주', 'sum' : 602691},
    {'city' : '대전', 'sum' : 583405},
    {'city' : '울산', 'sum' : 609226},
    {'city' : '세종', 'sum' : 159797},
    {'city' : '경기', 'sum' : 7722934},
    {'city' : '강원', 'sum' : 1312374},
    {'city' : '충북', 'sum' : 1134117},
    {'city' : '충남', 'sum' : 1245728},
    {'city' : '전북', 'sum' : 1044398},
    {'city' : '전남', 'sum' : 1273708},
    {'city' : '경북', 'sum' : 1717135},
    {'city' : '경남', 'sum' : 1861252},
    {'city' : '제주', 'sum' : 435043},
];

var typeList = [
	{text : 'line', value : 'line'},
	{text : 'spline', value : 'spline'},
	{text : 'scatter plot', value : 'scatter'},
	{text : 'area', value : 'area'},
];

var sampleData5_5 = Object.assign([], sampleData5);

var singleKeys5 = {
    x : "city",
    value : ["sum"]
};

var confDatarange = {
    data : {
        type : "line",
        json : sampleData5,
        keys : {
		    x : "city",
		    value : ["sum"]
		},
		legends: {'sum': '총 징수액'},
		datarange : {
			show : true,
			position : 'top',
			isHorizon : false,
			size: {
				width : 30
			},
         	onChange : 'fnChangeData',
      		dragable: false,
			movePos: {
				x: -30,
			},
      		drSeperatorGap : 10,
	  		drBack: {
			    strokeColor: "silver",
			    strokeWidth: 1,
			    strokeOpacity: 1,
			    color: "silver",
			    opacity: 0.2,
	  		},
			drMin: {
				strokeColor: "silver",
				strokeWidth: 0,
				strokeOpacity: 0.5,
				color: "grey",
				opacity: 0.6,
			},
			drMax: {
				strokeColor: "silver",
				strokeWidth: 0,
				strokeOpacity: 0.5,
				color: "grey",
				opacity: 0.6,
			},
			drSelected: {
				strokeColor: "silver",
				strokeWidth: 0,
				strokeOpacity: 0.5,
				color: "#8BDB81",
				opacity: 0.4,
			},
		}
	},
    axis : {
        x : {
            type : "category",
        },
        y : {
            noUsePadding: true,
            tick: {
            	format: function(d) { return d / 10000; }
          	},
          	label: {
          		text : '단위(만원)'
          	},
        },
    },
    title : {
    	text : '2020년 시∙도별 지방세외수입 징수 실적'
    },
    tooltip : {
    	format : {
    		value : function (value, ratio, id) {
    			return Number(value).toLocaleString() +'원'
    		}
    	}
    }
}

/**
 * @description SBGrid 생성한다.
 * @param {void} 
 */
function createGrid() {
	window.SBGridProperties = {};
	SBGridProperties.parentid = 'SBGridArea';
    SBGridProperties.id = 'datagrid';
    SBGridProperties.jsonref = 'sampleData5_5';   
    SBGridProperties.rowheader =['seq'];
    SBGridProperties.selectmode = 'byrow';
    SBGridProperties.total = {
    	type : 'grand',
    	position : 'top',
    	columns : 'sum',
    	grandtotalrow : {
    		titlecol : 1,
    		titlevalue : '합계',
    		style : 'background-color: rgb(146, 178, 197); font-weight: bold; color: rgb(255, 255, 255);',
    		stylestartcol : 1
    	},
    	columns : {
    		standard : [1],
    		sum : [2]
    	}
    };
    SBGridProperties.columns = [
        {caption : ['행정구역'], ref : 'city',  width : '30%',   style : 'text-align:center',   type : 'output'},
        {caption : ['합계'],    ref : 'sum',   width : '70%',   style : 'text-align:right',   type : 'output', format : {type: 'string', rule : '#,### "원"'}},
    ];
    window.datagrid = _SBGrid.create(SBGridProperties);
}

/**
 * @description SBChart를 생성한다.
 */
function createChart() {
	window.chart = sb.chart.render("#chartWrap", confDatarange);
}

/**
 * @description datarange의 change이벤트가 발생시 데이터를 filter하여 그리드에 반영한다.
 * @param {any} data 
 */
function fnChangeData(data) {
	var max = Math.floor(data[0]);
	var min = Math.floor(data[1]);
	var isHorizon = SBUxMethod.get('switch_isHorizon') === 'on';
	var jsonData = sampleData5.filter(function (obj, index) {
		var sum = obj['sum'];
		return isHorizon ?  (max <= index && min >= index) : (sum >= min && sum <= max); 
	});
	datagrid.setGridData(jsonData, true);
}

/**
 * @description datarange 배치(세로축/가로축), 드래그 사용여부, 차트 종류 변경시 함수 실행
 * @param {any} modelNm 
 */
function fnChange(modelNm) {
	var attribute = modelNm.slice(modelNm.indexOf('_') + 1);
	var data = SBUxMethod.get(modelNm);
	switch (attribute) {
		case 'isHorizon' :
			var isHorizon = data === 'on';
			var size = {};
			var movePos = {};
			if (isHorizon) {
				size = {
					height : 30,
					width : '100%'
				},
				movePos = {
					y: 30,
					x : 0
				};
				position = 'bottom';
			} else {
				size = {
					width : 30,
					height : '100%'
				};
				movePos = {
					x: -30,
					y: 0
				};
			}
			
			chart.data({
				datarange : {
					isHorizon : isHorizon,
					size: size,
					movePos: movePos,
					position : position
				}
			}).render();
			break;
		case 'dragable' :
			chart.data({
				datarange : {
					dragable : data === 'on'
				}
			}).render();
			break;
		case 'type' :
			chart.data({
				type : data
			}).render(); 
			break;
		default :
	}
}

$(function() {
	createGrid();
	createChart();
});