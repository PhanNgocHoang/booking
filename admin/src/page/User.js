import React, { useState, useEffect } from 'react';
import Left from '../components/Left-menu'
import Header from '../components/Header';
import { getUser, deleteUser } from '../services/api';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


function User(props) {
    React.useEffect(() => {
        getdata()
    }, [])


    const getdata = () => {
        getUser().then(({ data }) => {
            setUser(data.data)
        })
    }


    const onClickDelete = (id) => {
        deleteUser(id).then(({ data }) => {
            if (data.success === true) {
                getdata()
            }
        })
    }
    const columns = [
        { id: 'STT', label: 'STT', minWidth: 170 },
        { id: '_id', label: 'ID', minWidth: 100 },
        {
            id: 'name',
            label: 'Name',
            minWidth: 170,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'email',
            label: 'Email',
            minWidth: 170,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
    ];


    const useStyles = makeStyles({
        root: {
            width: '100%',
        },
        container: {
            maxHeight: 440,
        },
    });


    const [User, setUser] = useState([])
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <div>
                {/* Left Panel */}
                <Left />
                {/* Left Panel */}
                {/* Right Panel */}
                <div id="right-panel" className="right-panel">
                    {/* Header*/}
                    <Header />
                    {/* Header*/}
                    <div className="breadcrumbs">
                        <div className="col-sm-4">
                            <div className="page-header float-left">
                                <div className="page-title">
                                    <h1>Dashboard</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="page-header float-right">
                                <div className="page-title">
                                    <ol className="breadcrumb text-right">
                                        <li><a href="#">Dashboard</a></li>
                                        <li><a href="#">Table</a></li>
                                        <li className="active">Data table</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content mt-3">
                        <div className="animated fadeIn">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <strong className="card-title">NGƯỜI DÙNG</strong>
                                            <Link to="/admin/user/add"><button type="button" className="btn btn-primary" style={{ margin: "10px" }}>Thêm</button></Link>
                                        </div>
                                        <div className="card-body">
                                            {/* <table id="bootstrap-data-table-export" className="table table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>_ID</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {User.map((item, index) => {
                                                        return (
                                                            <tr key={item._id}>
                                                                <td>{index}</td>
                                                                <td>{item._id}</td>
                                                                <td>{item.name}</td>
                                                                <td>{item.email}</td>
                                                                <td><button type="button" className="btn btn-warning">Sửa</button></td>
                                                                <td><button type="button" className="btn btn-danger" onClick={() => onClickDelete(item._id)}>Xóa</button></td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table> */}

                                            <Paper className={classes.root}>
                                                <TableContainer className={classes.container}>
                                                    <Table stickyHeader aria-label="sticky table">
                                                        <TableHead>
                                                            <TableRow>
                                                                {columns.map((column) => (
                                                                    <TableCell
                                                                        key={column.id}
                                                                        align={column.align}
                                                                        style={{ minWidth: column.minWidth }}
                                                                    >
                                                                        {column.label}
                                                                    </TableCell>
                                                                ))}
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {User.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                                                return (
                                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                                        {columns.map((column) => {
                                                                            const value = row[column.id];
                                                                            return (
                                                                                <TableCell key={column.id} align={column.align}>
                                                                                    {value}
                                                                                </TableCell>
                                                                            );
                                                                        })}
                                                                        <button type="button" className="btn btn-warning" style={{ marginRight: "10px", marginLeft: "20px" }}>Sửa</button>
                                                                        <button type="button" className="btn btn-danger" onClick={() => onClickDelete(item._id)}
                                                                            style={{ marginLeft: "10px" }}>Xóa</button>
                                                                    </TableRow>
                                                                );
                                                            })}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                                <TablePagination
                                                    rowsPerPageOptions={[2, 5, 10]}
                                                    component="div"
                                                    count={User.length}
                                                    rowsPerPage={rowsPerPage}
                                                    page={page}
                                                    onChangePage={handleChangePage}
                                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                                />
                                            </Paper>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}


export default User