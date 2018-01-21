const Reconciler = require('react-reconciler')

import createInstance from './core/createInstance'

// import { createElement, getHostContextNode } from '../utils/createElement'

const RendererHostConfig = {
  appendInitialChild (parentInstance, child) {
    parentInstance.root.add(child.root)
  },

  createTextInstance (text, rootContainerInstance, internalInstanceHandle) {
    return text
  },

  finalizeInitialChildren (wordElement, type, props) {
    return false
  },

  getPublicInstance (inst) {
    return inst
  },

  prepareForCommit () {
    // noop
  },

  prepareUpdate (element, type, oldProps, newProps) {
    return true
  },

  resetAfterCommit () {
    // noop
  },

  resetTextContent (wordElement) {
    // Redocx does not have a text node like DOM
  },

  // If you've such use case where you need to provide data from the root instance,
  // see the below example. This may help you in creating your own custom renderer

  createInstance (type, props, internalInstanceHandle) {
    // 'internalInstanceHandle' is not transparent here. So use host context methods
    // to get data from roots
    return createInstance(type, props)
  },

  // Use this current instance to pass data from root
  getRootHostContext (instance) {
    // getHostContextNode here updates the internal state of createElement and stores a ref to current instance
    // return getHostContextNode(instance)
    return null
  },

  getChildHostContext (instance) {
    return null
  },

  shouldSetTextContent (type, props) {
    return false // Redocx does not have a text node like DOM
  },

  now: () => {},

  useSyncScheduling: true,

  mutation: {
    appendChild (parentInstance, child) {
      parentInstance.root.add(child.root)
    },

    appendChildToContainer (parentInstance, child) {
      parentInstance.scene.add(child.root)
    },

    removeChild (parentInstance, child) {
      parentInstance.root.remove(child.root)
    },

    removeChildFromContainer (parentInstance, child) {
      parentInstance.scene.remove(child.root)
    },

    insertBefore (parentInstance, child, beforeChild) {
      console.log('insertBefore', parentInstance, child, beforeChild)
      // noob
    },

    commitUpdate (instance, updatePayload, type, oldProps, newProps) {
      if (instance.shouldComponentUpdate(oldProps, newProps, updatePayload)) {
        instance._updateProps(newProps, oldProps, updatePayload)
      }
      // console.log('commitUpdate', instance, updatePayload, type, oldProps, newProps)
    },

    commitMount (instance, updatePayload, type, oldProps, newProps) {
      console.log('commitMount', instance, updatePayload, type, oldProps, newProps)
      // noop
    },

    commitTextUpdate (textInstance, oldText, newText) {
      textInstance.children = newText
    },
  },
}

export default Reconciler(RendererHostConfig)