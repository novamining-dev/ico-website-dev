export const form = () => {
  <div className="p-0 col-12 col-sm-8 col-md-7 col-lg-4 col-xl-3 d-flex form " style={{bottom: this.state. isSubmitActive ? '0' : '-320px' }}>

    <div className="row no-gutters d-flex w-100 h-100 align-self-stretch">
      <button className="col-12 text-center hoverable openContact" onClick={() => this.setState({ isSubmitActive:!this.state. isSubmitActive})} style={{ height:50}}>{this.state. isSubmitActive ? 'Close' : 'Join the whitelist'}</button>

        <form action="" className="col-12 align-self-center" >
          <label htmlFor="" className="col-12">
              <input type="text" name="email" className="col-12 text-center" value={this.state.email} onChange={this.handleChange.bind(this)} placeholder="Email"/>
              <input type="text" name="name" className="col-12 text-center" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder="Full name"/>
              <div className="row no-gutters d-flex h-50 justify-content-center">
                {/*  <p className="col-4 text-left ubuntu white light align-self-center" style={{marginTop:15}}>Crypto:</p>
                <Select
                  style={{marginTop:10}}
                   name="form-field-name"
                   value={value}
                   onChange={this.handleSelect}
                   className="col-8  p-0 light ubuntu white"
                   options={[
                     { value: 'one', label: 'Bitcoin' },
                     { value: 'two', label: 'Ethereum' },
                     { value: 'three', label: 'Litecoin' },
                   ]}
                 /> */}
                  <p className="col-12 text-center white light ubuntu">What will be your investment</p>
                       <div className="col-11">
                        <Slider min={0} max={100000} step={steps} onChange={(value) => this.setState({amount:value})}/>
                      </div>
                    <p className="col-12 text-center ubuntu  green bold text-right">{this.state.amount}$</p>


                  {/*  <input type="number" name="amount" className="col-12 text-center ml-auto" value={this.state.amount} onChange={this.handleChange.bind(this)} placeholder="Amount"/> */}
                <p className="col-12 text-center ubuntu white bold">{this.state.change !== undefined ? eth.toFixed(2) +' ETH' : 'Conversion not available'}</p>
              </div>

          </label>

        </form>
        <div className="w-100"></div>
        <div className="col-12 align-self-end m-0 p-0">
          <label htmlFor="" className="col-12">
            <button className="col-12" style={{ cursor : this.state.isSubmitable ? 'pointer' : 'not-allowed' , opacity: this.state.isSubmitable ? 'inherit' : '0.2'  }} onClick={() => this.state.isSubmitable ? this.submit() : null}>Submit</button>
          </label>

        </div>
    </div>
  </div>
}
