import React, { useEffect, useState } from 'react';
import Left from '../components/Left-menu'
import Header from '../components/Header';
import { getComment } from '../services/api'


function Comment(props) {
    const [Comments, setComment] = useState([])
    useEffect(() => {
        getComment().then(({ data }) => {
            console.log(data.data);
            setComment(data.data)
        })
    }, [])
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
                                            <strong className="card-title">BÌNH LUẬN</strong>
                                            <button type="button" className="btn btn-primary" style={{ margin: "10px" }}>Thêm</button>
                                        </div>
                                        <div className="card-body">
                                            <table id="bootstrap-data-table-export" className="table table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>UserID</th>
                                                        <th>RoomID</th>
                                                        <th>Comment</th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Comments.map((comment, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{index}</td>
                                                                <td>{comment.userId}</td>
                                                                <td>{comment.roomId}</td>
                                                                <td>{comment.commentContent}</td>
                                                                <td><button type="button" className="btn btn-warning">Sửa</button></td>
                                                                <td><button type="button" className="btn btn-danger">Xóa</button></td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
        </>
    )
}


export default Comment;