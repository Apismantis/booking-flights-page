var ticketInfor = {
    type: "one-way",
    from: "",
    to: "",
    depart: "",
    return: "",
    adults: 1,
    children: 0,
    infants: 0,
    filter: "default"
};

var RadioComponent = React.createClass({

    onToggleChange: function (e) {
        // Flight type
        if (e.currentTarget.name == "ticketType") {
            ticketInfor.type = e.currentTarget.value;
            console.log(ticketInfor.type);
        }
        // Filter: default, cheapest
        else {
            ticketInfor.filter = e.currentTarget.value;
            console.log(ticketInfor.filter);
        }
    },

    render: function () {
        return (
            <label className="radio-opt">
                <input type="radio" onChange={this.onToggleChange} name={this.props.radioName}
                       value={this.props.radioValue}/>{this.props.radioDes}
            </label>
        );
    }
});

var TicketType = React.createClass({
    render: function () {
        return (
            <div>
                <div className="radio">
                    <RadioComponent radioName="ticketType" radioValue="one-way" radioDes="Vé một chiều"/>
                    <RadioComponent radioName="ticketType" radioValue="round-trip" radioDes="Vé khứ hồi"/>
                </div>
            </div>
        );
    }
});

var Location = React.createClass({
    getInitialState: function() {
        return null;
    },

    render: function () {
        return (
            <div className="location-picker">
                <div className="location-picker-title">
                    <i className="fa fa-plane" aria-hidden="true"/>
                    <span>&nbsp;&nbsp;{this.props.label}</span>
                </div>
                <select className="input-default input-selection-box" name={this.props.name}>
                    <option>Hồ Chí Minh</option>
                    <option>Hà Nội</option>
                    <option>Đà Lạt</option>
                    <option>Phú Quốc</option>
                </select>
            </div>
        );
    }
});

var LocationPicker = React.createClass({
    render: function () {
        return (
            <div>
                <Location label="bay từ" name="from"/>
                <span>&nbsp;&nbsp;<i className="fa fa-exchange" aria-hidden="true"/>&nbsp;&nbsp;</span>
                <Location label="bay đến" name="to"/>
            </div>
        );
    }
});

var DatePicker = React.createClass({
    render: function () {
        return (
            <div className={this.props.class}>
                <div className="location-picker-title">
                    <i className="fa fa-calendar-check-o" aria-hidden="true"/>
                    <span>&nbsp;&nbsp;{this.props.label}</span>
                </div>
                <input type="text" id={this.props.id} name={this.props.name} placeholder={this.props.placeHolder}
                       data-date-format="DD, MM d" className="input-default input-selection-box"/>
            </div>
        );
    }
});

var DepartReturnDatePicker = React.createClass({
    render: function () {
        return (
            <div>
                <div id="flight-datepicker" className="input-daterange input-group">
                    <DatePicker id="start-date" name="start" label="đi ngày" placeHolder="Chọn ngày đi"/>
                    <DatePicker id="end-date" name="end" label="về ngày" placeHolder="Chọn ngày về"
                                class="date-return"/>
                </div>
            </div>
        );

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
    }
});

var GroupPeople = React.createClass({
    render: function () {
        return (
            <div className="col-md-4">
                <span>{this.props.name}</span>
                <div className="float-right">
                    <a className="btn btn-circle btn-primary"><i className="fa fa-minus" aria-hidden="true"/></a>
                    <span className="number-people">1</span>
                    <a className="btn btn-circle btn-primary"><i className="fa fa-plus" aria-hidden="true"/></a>
                </div>
            </div>
        );
    }
});

var PeopleSelection = React.createClass({
    render: function () {
        return (
            <div className="row">
                <GroupPeople name="Người lớn"/>
                <GroupPeople name="Trẻ em"/>
                <GroupPeople name="Em bé"/>
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
                        <RadioComponent radioName="filter" radioValue="default" radioDes="Bay vào ngày này"/>
                        <RadioComponent radioName="filter" radioValue="cheapest" radioDes="Tìm vé rẻ nhất"/>
                    </div>
                </div>
            </div>
        );
    }
});

var SearchBox = React.createClass({
    // Handle find ticket click
    handleFindTicket: function () {

    },

    render: function () {
        return (
            <div className="main-container">
                <TicketType/>
                <LocationPicker/>
                <DepartReturnDatePicker/>
                <hr/>
                <PeopleSelection/>
                <hr/>
                <SearchOption/>
                <a onClick={this.handleFindTicket} className="btn btn-round float-right">
                    <i className="fa fa-search" aria-hidden="true"/>&nbsp;&nbsp;Tìm vé</a>
            </div>
        );
    }
});

ReactDOM.render(<SearchBox/>, document.getElementById('search-box'));
