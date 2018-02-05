import { shallow} from '@vue/test-utils'
import MessageList from '@/components/MessageList'

describe('MessageList.test.js', () => {
    let cmp
    
    beforeEach(() => {
        cmp = shallow(MessageList, {
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
})