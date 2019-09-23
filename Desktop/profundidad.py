"""
la funcion nextStates, se encarga de 
definir todos los estados posibles dependiendo
de un estado actual dado.
Estos estados estan representados como tuplas (x,y)
donde 'x' se refiere a la jarra de 4 litros de capacidad
y 'y' a la jarra de 3 litros de capacidad
"""
def nextStates(estado_actual):
    x,y = estado_actual
    estado = [(4,y),(x,3),(0,y),(x,0)]
    if x+y >= 4:
        estado += [(4,y-(4-x))]
    else:
        estado += [(x+y,0)]
    if x+y >= 3:
        estado += [(x-(3-y),3)]
    else:
        estado += [(0,x+y)]
    return list(set(estado))

"""

La funcion dfSearch se encarga de hacer la busqueda
en profundidad, de acuerdo a un estado inicial 
de las jarras para llegar a un estado final de 
las mismas.

por ejemplo, si se quiere que las jarras queden en el 
estado (2,0), es decir, la primera jarra con 
2 litros y la segunda vacia,
el llamado a la funcion seria:

>>>dfSearch((0,0),(2,0))
"""

def dfSearch(inicio,final):
    l = [[inicio]]
    while l != []:
        camino = l[0]
        l = l[1:]
        if camino[-1] == final:
            return camino
        posibilidades = nextStates(camino[-1])
        for p in posibilidades:
            if p not in camino:
                l = [camino+[p]] + l
    return []
    