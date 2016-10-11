var dateSelect = $('#flight-datepicker');
var dateDepart = $('#start-date');
var dateReturn = $('#end-date');
var spanDepart = $('.date-depart');
var spanReturn = $('.date-return');
var spanDateFormat = 'ddd, MMMM D yyyy';

dateSelect.datepicker({
    autoclose: true,
    format: "dd/mm/yyyy",
    maxViewMode: 0,
    startDate: "now"
}).on('change', function () {
    var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
    var end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);
    spanDepart.text(start);
    spanReturn.text(end);
});

var TicketTye = React.createClass({
    render: function () {
        return (
            <div>
                <div className="radio">
                    <label className="radio-opt"><input type="radio" name="tiketType" value="one-way"/>Vé một
                        chiều</label>
                    <label className="radio-opt"><input type="radio" name="tiketType" value="round-trip"/>Vé khứ
                        hồi</label>
                </div>
            </div>
        );
    }
});

var LocationPicker = React.createClass({
    render: function () {
        return (
            <div>
                <div className="location-picker">
                    <div className="location-picker-title">
                        <i className="fa fa-plane" aria-hidden="true"/>
                        <span>&nbsp;&nbsp;bay từ</span>
                    </div>
                    <select className="input-default input-selection-box" id="department">
                        <option className="selection-option">Hồ Chí Minh</option>
                        <option className="selection-option">Hà Nội</option>
                        <option className="selection-option">Đà Lạt</option>
                        <option className="selection-option">Phú Quốc</option>
                    </select>
                </div>
                <span>&nbsp;&nbsp;<i className="fa fa-exchange" aria-hidden="true"/>&nbsp;&nbsp;</span>
                <div className="location-picker">
                    <div className="location-picker-title">
                        <i className="fa fa-plane" aria-hidden="true"/>
                        <span>&nbsp;&nbsp;bay đến</span>
                    </div>
                    <select className="input-default input-selection-box" id="sel1">
                        <option>Hồ Chí Minh</option>
                        <option>Hà Nội</option>
                        <option>Đà Lạt</option>
                        <option>Phú Quốc</option>
                    </select>
                </div>
            </div>
        );
    }
});

var DatePicker = React.createClass({
    render: function () {
        return (
            <div>
                <div id="flight-datepicker" className="input-daterange input-group">
                    <div>
                        <div className="location-picker-title">
                            <i className="fa fa-calendar-check-o" aria-hidden="true"/>
                            <span>&nbsp;&nbsp;đi ngày</span>
                        </div>
                        <input type="text" id="start-date" name="start" placeholder="Chọn ngày đi"
                               data-date-format="DD, MM d" className="input-default input-selection-box"/>
                    </div>
                    <div className="date-return">
                        <div className="location-picker-title">
                            <i className="fa fa-calendar-check-o" aria-hidden="true"/>
                            <span>&nbsp;&nbsp;về ngày</span>
                        </div>
                        <input type="text" id="end-date" name="end" placeholder="Chọn ngày về"
                               data-date-format="DD, MM d"
                               className="input-default input-selection-box"/>
                    </div>
                </div>
            </div>
        );
    }
});

var PeopleSelection = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-md-4">
                    <span>Người lớn</span>
                    <div className="float-right">
                        <a className="btn btn-circle btn-primary"><i className="fa fa-minus" aria-hidden="true"/></a>
                        <span className="number-people">1</span>
                        <a className="btn btn-circle btn-primary"><i className="fa fa-plus" aria-hidden="true"/></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <span>Trẻ em</span>
                    <div className="float-right">
                        <a className="btn btn-circle btn-primary"><i className="fa fa-minus" aria-hidden="true"/></a>
                        <span className="number-people">1</span>
                        <a className="btn btn-circle btn-primary"><i className="fa fa-plus" aria-hidden="true"/></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <span>Em bé</span>
                    <div className="float-right">
                        <a className="btn btn-circle btn-primary"><i className="fa fa-minus" aria-hidden="true"/></a>
                        <span className="number-people">1</span>
                        <a className="btn btn-circle btn-primary"><i className="fa fa-plus" aria-hidden="true"/></a>
                    </div>
                </div>
            </div>
        );
    }
});

var SearchOption = React.createClass({
    render: function () {
        return (
            <div>
                <div>
                    <div className="radio">
                        <label className="radio-opt"><input type="radio" name="filter" value="one-way"/>Bay vào ngày
                            này</label>
                        <label className="radio-opt"><input type="radio" name="filter" value="round-trip"/>Tìm vé rẻ
                            nhất</label>
                    </div>
                </div>
            </div>
        );
    }
});

var SearchBox = React.createClass({
    render: function () {
        return (
            <div className="main-container">
                <TicketTye/>
                <LocationPicker/>
                <DatePicker/>
                <hr/>
                <PeopleSelection/>
                <hr/>
                <SearchOption/>
                <a className="btn btn-round float-right"><i className="fa fa-search" aria-hidden="true"/>&nbsp;&nbsp;
                    Tìm vé</a>
            </div>
        );
    }
});

ReactDOM.render(<SearchBox/>, document.getElementById('search-box'));


