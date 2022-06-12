import AccountNav from "../Components/AccountNav";

const Conditions = () => {
    return (  <section className="py-4 osahan-main-body">
    <div className="container">
        <div className="row">
           <AccountNav/>
            <div className="col-lg-8 p-4 bg-white rounded shadow-sm">
                <h4 className="mb-4 profile-title">Terms and Conditions</h4>
                <div id="terms_conditions">
                    <p className="text-muted">Grocery may give refunds for some item purchases, depending on the refund
                        policies. You can also contact us directly.<br/><br/>If a purchase was accidentally made by a
                        friend or family member using your account, request a refund on the grocery website.<br/><br/>
                        If you find a grocery purchase on your card or other payment method that you didnt make and
                        that wasnt made by anyone you know, report unauthorized charges within 120 days of the
                        transaction.<br/><br/>If youve had a refund request accepted, check how long your refund will
                        take.</p>
                </div>
            </div>
        </div>
    </div>
</section> );
}
 
export default Conditions;