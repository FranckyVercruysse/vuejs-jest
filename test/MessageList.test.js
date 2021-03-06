import { mount } from '@vue/test-utils'
import MessageList from '@/components/MessageList'
import Message from '@/components/Message'

describe('MessageList.test.js', () => {
    let cmp
    
    beforeEach(() => {
        cmp = mount(MessageList, {
            // Beaware that props is overriden using `propsData`
            propsData: {
                messages: ['Cat']
            }
        })
    })

    it('has received ["Cat"] as the message property', () => {
        expect(cmp.vm.messages).toEqual(['Cat'])
    })

    it('has the expected html stucture', () => {
        expect(cmp.element).toMatchSnapshot()
    })

    it('is a MessageList component', () => {
        expect(cmp.is(MessageList)).toBe(true)

        // or with CSS selector
        expect(cmp.is('ul')).toBe(true)
    })

    it('contains a Message component', () => {
        expect(cmp.contains(Message)).toBe(true)

        // or with CSS selector
        expect(cmp.contains('.message')).toBe(true)
    })

    it('Both MessageList and Message are vue instances', () => {
        expect(cmp.isVueInstance()).toBe(true)
        expect(cmp.find(Message).isVueInstance()).toBe(true)
    })

    it('Messge element exists', () => {
        expect(cmp.find('.message').exists()).toBe(true)
    })

    it('Message is not empty', () => {
        expect(cmp.find(Message).isEmpty()).toBe(false)
    })

    it('Message has a class attribute set to "message"', () => {
        expect(cmp.find(Message).attributes().class).toBe('message')
    })

    it('Message component has the .message class', () => {
        expect(cmp.find(Message).classes()).toContain('message')
    })

    it('Message component has style margin-top: 10', () => {
        console.log(cmp.find(Message).element.style)
        // console.log(cmp.find(Message).element.style['margin-top'])
        console.log(cmp.find(Message).element.style['color'])
        expect(cmp.find(Message).element.style['margin-top']).toBe('10px')
    })

    it('Message component has style margin-top: 10', () => {
        expect(cmp.find(Message).element.style['margin-top']).toEqual('10px')
    })
})