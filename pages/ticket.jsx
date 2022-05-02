import AccountNav from "../Components/AccountNav";

const Ticket = () => {
    return ( 
        <section className="py-4 osahan-main-body">
        <div className="container">
            <div className="row">
               <AccountNav/>
                <div className="col-lg-8 p-4 bg-white rounded shadow-sm">
                    <h4 className="mb-4 profile-title">Tickets</h4>
                    <div id="edit_profile">
                        <div className="p-0">
                            <form action="help_ticket.html">
                                <div className="form-group">
                                    <label for="exampleInputName1">Full Name</label>
                                    <input type="text" placeholder="Enter Full Name" className="form-control"
                                        />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" placeholder="Enter Email" className="form-control"
                                        aria-describedby="emailHelp"/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">How can we improve</label>
                                    <input type="text" placeholder="can we improve?" className="form-control"
                                        />
                                </div>
                                <button type="submit" className="btn btn-success btn-lg btn-block">Ask us freely</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Ticket;