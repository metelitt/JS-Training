// Поскольку this – это объект, который стоит перед точкой, rabbit.eat() изменяет объект rabbit.

// Поиск свойства и исполнение кода – два разных процесса. Сначала осуществляется поиск метода rabbit.eat в прототипе, а затем этот метод выполняется с this=rabbit.