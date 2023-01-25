import { Notify } from 'quasar'

export function notifyPositive (msg) {
  Notify.create({
    type: 'positive',
    position: 'bottom',
    message: msg,
    icon: 'check',
    classes: 'positive-notification',
    progress: true
  })
}

export function notifyNegative (msg) {
  Notify.create({
    type: 'negative',
    position: 'bottom',
    message: msg,
    icon: 'report_problem',
    classes: 'negative-notification',
    progress: true
  })
}

export function notifyCustom (msg, type, closeBtn, icon) {
  Notify.create({
    type,
    position: 'bottom',
    message: msg,
    icon,
    multiLine: true,
    closeBtn,
    classes: 'error-notification'
  })
}

export function notifyNegativeWithDetail (msg, detailMsg) {
  Notify.create({
    type: 'negative',
    position: 'top',
    message: msg,
    detail: detailMsg,
    icon: 'report_problem'
  })
}

export function showErrors (errors, fieldsDictionary) {
  let caption = '<div>'
  const fieldsError = errors.errors
  const fieldsErrorKeys = Object.keys(fieldsDictionary)
  if (fieldsError && fieldsErrorKeys && fieldsErrorKeys.length > 0) {
    // caption += '<div class="caption-title"> موارد احتمالی </div>'
    caption += '<div class="fields-errors">'
    fieldsErrorKeys.forEach(key => {
      const _errors = fieldsError[key]
      if (_errors) {
        caption += '<div class="field-name">- '
        caption += fieldsDictionary[key] || ''
        caption += '</div>'
        caption += '<ul>'
        _errors.forEach(error => {
          caption += '<li>'
          caption += error
          caption += '</li>'
        })
        caption += '</ul>'
      }
    })

    caption += '</div>'
    // caption += '<div class="row justify-end text-twilight-blue"><button> بستن </button></div>'
  }
  caption += '</div>'
  Notify.create({
    position: 'bottom-right',
    message: '<div class="message">' + errors.message + '</div>',
    caption,
    progress: true,
    html: true,
    timeout: 4000,
    classes: 'error-handler',
    actions: [
      { label: 'بستن', color: 'black', handler: () => { /* ... */ } }
    ]
  })
}

export function notifySUccessRegister (msg) {
  Notify.create({
    type: 'positive',
    position: 'bottom',
    message: '<div id="successfull-register">' + msg + '</div>',
    icon: 'check',
    classes: 'positive-notification',
    progress: true,
    html: true
  })
}
