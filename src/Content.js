import React, { Component } from 'react';
import db from './FirestoreConfig';

export default class Content extends Component {

    state = {
        items:[]
    }

    componentDidMount(){
        db.collection('flotas').get().then((snapShots)=>{
            this.setState({
                items:snapShots.docs.map(doc=>{
                    console.log(doc.data());
                    return{id:doc.id, data:doc.data()}
                })
            })
        })
    }

    render() {
        const {items}=this.state;
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1>Sensores 2.0.3</h1>
                        </div>
                        <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="fake_url">Grafico</a></li>
                            <li className="breadcrumb-item active">Tabla</li>
                        </ol>
                        </div>
                    </div>

                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                        {/* interactive chart */}
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar" />
                                Monitoreo de Flotas de Camiones Rebaza
                            </h3>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Region</th>
                                    <th scope="col">Temperatura</th>
                                    <th scope="col">Conductor</th>
                                    <th scope="col">Placa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {items && items !== undefined ? items.map((item,key)=>(
                                        <tr key={key}>
                                            <td>{item.data.numero}</td>
                                            <td>{item.data.region}</td>
                                            <td>{item.data.temperatura}</td>
                                            <td>{item.data.conductor}</td>
                                            <td>{item.data.placa}</td>
                                        </tr>
                                    )):null}
                                </tbody>
                                </table>
                            </div>
                            {/* /.card-body*/}
                        </div>
                        {/* /.card */}
                        </div>
                        {/* /.col */}
                    </div>

                    <div className="row">
                        <div className="col-12">
                        {/* interactive chart */}
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar" />
                                Consumo en tiempo real
                            </h3>
                            <div className="card-tools">
                                Real Time. 
                                <div className="btn-group" id="realtime" data-toggle="btn-toggle">
                                <button type="button" className="btn btn-default btn-sm active" data-toggle="on">On</button>
                                <button type="button" className="btn btn-default btn-sm" data-toggle="off">Off</button>
                                </div>
                            </div>
                            </div>
                            <div className="card-body">
                            <div id="interactive" style={{height: 300}} />
                            </div>
                            {/* /.card-body*/}
                        </div>
                        {/* /.card */}
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                    <div className="row">
                        <div className="col-md-6">
                        {/* Line chart */}
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar" />
                                Consumo por hora
                            </h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                                </button>
                            </div>
                            </div>
                            <div className="card-body">
                            <div id="line-chart" style={{height: 300}} />
                            </div>
                            {/* /.card-body*/}
                        </div>
                        {/* /.card */}
                        {/* Area chart */}
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar" />
                               Variación de Nivel de tanque
                            </h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                                </button>
                            </div>
                            </div>
                            <div className="card-body">
                            <div id="area-chart" style={{height: 338}} className="full-width-chart" />
                            </div>
                            {/* /.card-body*/}
                        </div>
                        {/* /.card */}
                        </div>
                        {/* /.col */}
                        <div className="col-md-6">
                        {/* Bar chart */}
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar" />
                                Consmo por mes
                            </h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                <i className="fas fa-times" />
                                </button>
                            </div>
                            </div>
                            <div className="card-body">
                            <div id="bar-chart" style={{height: 300}} />
                            </div>
                            {/* /.card-body*/}
                        </div>
                        {/* /.card */}
                        {/* Donut chart */}
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar" />
                                Consumo Diario en potencia
                            </h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                                </button>
                            </div>
                            </div>
                            <div className="card-body">
                            <div id="donut-chart" style={{height: 300}} />
                            </div>
                            {/* /.card-body*/}
                        </div>
                        {/* /.card */}
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
                </div>
                {/* /.content-wrapper */}

            </div>
        )
    }
}
