# Episode-3-ILaying The Foundation-
## Theory

Qn1. What is JSX?

- JSX is HTML like syntax.
- It is JS syntax which is easier to create React element.
- It is not a pure JS.


Qn2. SuperPowers of JSX

- We can write HTML elements without using the create element.
- JSX converts HTML tags into react elements.
- JSX prevents cross site scripting. 


Qn3. Role of Type attribute in script tag?
What options can we use? 

- The Type attribute in script tag represents the type of script.
- It identifies the content between the script tag .
- We can use src,cross-origin,defer,etc attribute inside script tag.
  
Qn4. {TitleComponent} vs {<TitleComponent>} vs {<TitleComponent></TitleComponent>} in JSX

- {TitleComponent} is used when the TitleComponent is a react element and react element is after all a javascript variable so we can use it in our code like {TitleComponent}.
### const TitleComponent=(<h1 className='head'>Hi</h1>)
### const Head=()=>{return (<div>{TitleComponent}</div>)}

- {<TitleComponent>} is used when the TitleComponent is a react component so, we can use it in our code like {<TitleComponent>}.
- It is shorthand property of <TitleComponent></TitleComponent>.
- It is used when we don't want to include any child component within.
- React component starts with capital letter.

### const TitleComponent=()=>{return
 (<h1 className='head'>Hi</h1>)
 }
### const Head=()=>{return 
(<div><TitleComponent/></div>)
}

- When we wan't to include any component within our React component, we don't use shorthand property.
- When we want to treat it as parent component and wrap child components within it.
### const TitleComponent=()=>{return 
(<h1 className='head'>Hi</h1>)
}
### const Comp2=()=> {return
(<h2>Comp2</h2>)
}
### const Head=()=>{return 
(<div>
<TitleComponent>
  Hello React <Comp2/>
</TitleComponent>
</div>)
}

