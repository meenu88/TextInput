import TextInput from './components/TextInput'

function App() {
  return (
    <div className="ml-8 py-10 min-h-screen bg-white">
      <p className="font-bold">Variations of Text Input</p>
      <div className="max-w-4xl mx-auto py-10">
        <div className="grid grid-cols-4 gap-6">
          <p className="font-bold">Variations</p>
          <p className="font-bold">Default with hover, focus and active states</p>
          <p className="font-bold">Error state</p>
          <p className="font-bold">Disabled state</p>

          <p className="font-bold">No label</p>
          <TextInput 
            placeholderText = "Placeholder text"
          />
          <TextInput 
            error = "true"
            errorText = "Only use the letters a-z."
          />
          <TextInput 
            disabled = "true"
          />

          <p className="font-bold">With label</p>
          <TextInput 
            label = "Label"
            placeholderText = "Placeholder text"
            required = "true"
          />
          <TextInput 
            label = "Label"
            error = "true"
            errorText = "Only use the letters a-z."
          />
          <TextInput 
            label = "Label"
            disabled = "true"
          />
        </div>
      </div>
    </div>

  );
}

export default App;
