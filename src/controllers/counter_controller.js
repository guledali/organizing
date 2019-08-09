import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['output']
  
  initialize() {
    //this.outputTarget.textContent = this.data.get("count")
    console.log(this.outputTarget.textContent = this.count)
  }

  increment() {
    this.count++
    //this.data.set("count", this.outputTarget.textContent++)
  }

  decrement() {
    this.count--
    //this.data.set("count", this.outputTarget.textContent++)
  }

  get count() {
    return this.data.get("count")
  }

  set count(value) {
    this.data.set("count", value)
    console.log(this.count)
    //console.log(this.outputTarget.textContent = this.count)
  }
}