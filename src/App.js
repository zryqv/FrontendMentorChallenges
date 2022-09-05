import DateInput from './components/DateInput';
import Input from './components/Input';
import bgLeft from './img/bg-main-desktop.png';
function App() {
  return (
    <div
      className=' text-white h-screen w-screen flex sm:flex-row flex-col'
      style={{ fontSize: '18px' }}
    >
      <div
        className='sm:w-3/12 sm:h-full w-full'
        style={{ backgroundImage: `url(${bgLeft})` }}
      ></div>
      <div className='lg:w-4/12 md:2/12 sm:1/12 w-0'></div>
      <div className='w-full sm:7/12 md:6/12 lg:w-5/12 my-auto sm:mx-auto'>
        <Input
          label='cardholder name'
          inputName='cardholder-name'
          error={false}
        />
        <Input
          label='card number'
          inputName='card-number'
          error='Wrong format, numbers only'
        />
        <div className='flex w-1/2 justify-center items-center'>
          <div className='w-1/2  h-24'>
            <DateInput error={false} />
          </div>
          <div className='w-1/2  h-24'>
            <Input
              label='cvc'
              inputName='cvc'
              error={false}
              width='w-full'
              error="Can't be blank"
              placeholder='e.g. 123'
              type='tel'
            />
          </div>
        </div>
        <div className='w-1/2'>
          <button className='w-full rounded-md bg-[#21092F] capitalize py-2 text-sm'>
            confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
