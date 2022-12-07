/* 
This function checks if a student is able to afforrd to rent an apartment looking
at their total money received from home or bursary, rent they are willing to pay, 
savings to towards the apartment(if any), months they are going to rent the place
(optional) and deposit for the apartment (if any).
*/

function affordability(mIncome, mRent, mAllowance, months = 1, deposit = 0, savings = 0) {
   
    let totMoney = mIncome + savings;
    let mExpenses = mRent + mAllowance;
    let mLeft = 0;

    if (totMoney < mExpenses) {
        return "You will not be able to pay this rent, adjust spending and try again."
    } else {
        if (totMoney < mExpenses) {
            while (totMoney >= mExpenses) {
                totMoney = totMoney - mExpenses;
                mLeft = totMoney;
                months++;
            }
            return "You will afford this for "+ months + 
            " and be left with R" + mLeft + ".";
        } else if (mIncome = mExpenses) {
            if (savings > 0)
                return "Your savings will be left throughout your rental period";
            else
                return "You will afford this rent but wont save any money.";
        } else {
            while (months < 12) {
                mLeft += (mIncome - mExpenses);
                months++;
            }
            return "You will rent for over " + months +
                " months and accumulate over R" + (mLeft += savings) +
                    " in your savings during that period.";
        }
    }
}

console.log(affordability(1800, 1000, 700));