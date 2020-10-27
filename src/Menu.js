import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-light elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                    <span className="brand-text font-weight-light">IoT Platform</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/logo.png" className="img-circle elevation-2" alt="Usuario"/>
                    
                    </div>
                    <div className="info">
                        <a href="https://github.com/CalebVentura" className="d-block">Caleb Ventura</a>
                    </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library */}
                        <li className="nav-item has-treeview menu-open">
                        <a href="fake_url" className="nav-link">
                            <i className="nav-icon fas fa-tachometer-alt" />
                            <p>
                            Dashboard
                            <i className="right fas fa-angle-left" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <a href="./index.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Motores</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="./index2.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Sensores de campo</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="./index3.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Casa</p>
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a href="pages/widgets.html" className="nav-link">
                            <i className="nav-icon fas fa-th" />
                            <p>
                            Widgets
                            <span className="right badge badge-danger">New</span>
                            </p>
                        </a>
                        </li>
                        
                        <li className="nav-item has-treeview">
                        <a href="fake_url" className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <p>
                            Tables
                            <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <a href="pages/tables/simple.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Simple Tables</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/tables/data.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>DataTables</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/tables/jsgrid.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>jsGrid</p>
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-header">EXAMPLES</li>
                        <li className="nav-item">
                        <a href="pages/calendar.html" className="nav-link">
                            <i className="nav-icon far fa-calendar-alt" />
                            <p>
                            Calendar
                            <span className="badge badge-info right">2</span>
                            </p>
                        </a>
                        </li>
                    
                        <li className="nav-item has-treeview">
                        <a href="fake_url" className="nav-link">
                            <i className="nav-icon fas fa-book" />
                            <p>
                            Pages
                            <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <a href="pages/examples/invoice.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Invoice</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/examples/profile.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Profile</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/examples/e_commerce.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>E-commerce</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/examples/projects.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Projects</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/examples/project_add.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Project Add</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/examples/project_edit.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Project Edit</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/examples/project_detail.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Project Detail</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/examples/contacts.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Contacts</p>
                            </a>
                            </li>
                        </ul>
                        </li>
                      
                        <li className="nav-header">LABELS</li>
                        <li className="nav-item">
                        <a href="fake_url" className="nav-link">
                            <i className="nav-icon far fa-circle text-danger" />
                            <p className="text">Important</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="fake_url" className="nav-link">
                            <i className="nav-icon far fa-circle text-warning" />
                            <p>Warning</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="fake_url" className="nav-link">
                            <i className="nav-icon far fa-circle text-info" />
                            <p>Informational</p>
                        </a>
                        </li>
                    </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
                </aside>

            </div>
        )
    }
}
