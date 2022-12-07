function payii(initDep, months, interest, mDep = 0, mdepo = 0) {
    let goal = initDep * 2;
    let mDI = interest; //Tryna Sound classy *Wink*, monthly deposit interet
    let invested, intrstsEarned;
    let mIndex = 0;
    let currrent1 = 0, currrent2 = 0, currrent3 = 0;

    if (months > 1) {
        if (mDep == 0) {
            mDep = (initDep - (initDep * interest * months)) / months;
            if (mDep < 0) mDep *= -1;
        }
    } else mDep = 0;
    

    mDR = mDep * months * interest; //Monthly deposit return

    while (mIndex < months) {
        currrent1 += (initDep * interest);
        currrent2 += (mDep * interest);
        mIndex++;
    }

    currrent3 = currrent1 + currrent2 + initDep + (mDep * months);
    invested = (mDep * months) + initDep;
    intrstsEarned = currrent3 - invested;
    let reinvest = (currrent3 * 0.95);

    return "You will make R" + currrent3 + " in " + months + " months, monthly deposit R" + mDep +
    ", \ninterest on initial deposit = R" + currrent1 + 
    ", and \ninterest on monthly deposits = R" + currrent2 + "." +
    "\nUse R" + (currrent3 - (currrent3 * 0.95)) + " and \nReinvest R" +
        reinvest + ". \nYou have invested R" + invested +
        " and \nearned R" + intrstsEarned + " through interests.";
}

console.log(payii(1000, 1, 0.04)); //four quaters