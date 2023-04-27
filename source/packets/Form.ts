import { Client } from 'bedrock-protocol'

interface Button {
  text: string
  image?: string
}

class Form {
  private title: string
  private id: number
  private buttons: Button[] = []
  private contents = []

  setTitle (title: string): Form {
    this.title = title

    return this
  }

  setId (id: number) {
    this.id = id

    return this
  }

  addButton (btn: Button) {
    this.buttons.push(btn)

    return this
  }

  setButtons (...btn: Button[]) {
    this.buttons = btn

    return this
  }

  addInput (text: string, placeholder?: string) {
    this.contents.push({
      type: 'input',
      text,
      placeholder
    })

    return this
  }

  addDropdown (text: string, ...options: string[]) {
    this.contents.push({
      type: 'dropdown',
      text,
      options
    })

    return this
  }

  addLabel (text: string) {
    this.contents.push({
      type: 'label',
      text
    })

    return this
  }

  addToggle (text: string) {
    this.contents.push({
      type: 'toggle',
      text
    })

    return this
  }

  addSlider (text: string, min: number, max: number, step = 1) {
    this.contents.push({
      type: 'slider',
      text,
      min,
      max,
      step
    })

    return this
  }

  execute (client: Client) {
    client.queue('modal_form_request', {
      id: this.id,
      data: JSON.stringify({
        type: 'custom_form',
        title: this.title,
        content: this.contents,
        buttons: this.buttons
      })
    })

    return this
  }
}

export default Form
