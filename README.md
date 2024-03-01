# AngularViewEncapsulation

# Encapsulation
Encapsulation  means hiding data and behavior from outside world.

# Types of Encapsulation:
**1. ViewEncapsulation.Emulated (default)**
    If the css property is set to parent component, the property will be added to its property only. Does not affect to other component.

**2. ViewEncapsulation.None**
    If the css property is set to parent component, the property will be added to all child component.

**3. ViewEncapsulation.ShadowDom**
    If the css is added to the global css (style.css), the property will be added to all the components but with this **ViewEncapsulation.ShadowDom** property in ts file, the component itself will not accept the global css property and work as a self shadom DOM property.
