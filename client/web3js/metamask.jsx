

class Metamask{

    ADDRESS_TOKEN:string;
    CODE_ERROR:Object;
    constructor(){

        this.ADDRESS_TOKEN="0x52Ed534b9D750F90755Fb9899E8DB968a782f217" ;
        this.CODE_ERROR={
            "NO_EXIST_METAMASK":-1
            ,"ERROR_SEND_TRANSACTION":-2
        };
    }

    existMetamask(){

        if (typeof web3 === 'undefined') {
                return false;
        }
        return true;

    }


    sendTransaction(weiAmount:number){
        return new Promise((resolve, reject)=> {

            web3.eth.sendTransaction({
                from: web3.eth.coinbase,
                to: this.ADDRESS_TOKEN,
                value: weiAmount
            }, function(error, transactionHash) {
                if (!error) {
                    resolve({"data":transactionHash});
                } else {
                    resolve({"error":error});
                }
            })

        });
    }

    async buyToken(amount:number, unit:string)
    {
        if(this.existMetamask()) {
            // web3.toWei(amount, 'ether')
            let weiAmount = web3.toWei(amount, unit);
            let  result= await this.sendTransaction(weiAmount);
            if(!error){
                return {"data":transactionHash};
            }
            else{
                return {"error":this.CODE_ERROR.ERROR_SEND_TRANSACTION, "infoError":error}
            }
        }
        else{
            return {"error":this.CODE_ERROR.NO_EXIST_METAMASK};
        }  
    }


}


Metamask = new Metamask();
module.exports = Metamask;