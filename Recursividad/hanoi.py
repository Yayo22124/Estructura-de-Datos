def torre_hanoi(n, torre1, torre2, torre3):
    if n == 1:
        return [(torre1, torre3)] 
    else:
        movimientos = []
        movimientos.extend(torre_hanoi(n-1, torre1, torre3, torre2))    #DE TORRE1 a TORRE2
        movimientos.append((torre1,torre3))                             #DE TORRE1 A TORRE3 
        movimientos.extend(torre_hanoi(n-1, torre2,torre1,torre3))      #DE TORRE2 A TORRE3

    return movimientos #LISTA

# movimientos = torre_hanoi(3, '1', '2', '3')

# for movimiento in movimientos:
#     print(f'DE {movimiento[0]} A {movimiento[1]}')

def mostrar_torres(movimientos, n):
    torres = [[], [], []]

# n = 3
# torres = [[], [], []]

# for i in range(n, 0, -1):
#     torres[0].append(i)

# print(torres)
    for i in range(n, 0, -1): #LLENANDO LA TORRE EN FORMA DESCENDENTE
        torres[0].append(i)
        
    print("ESTADO INIICIAL:")
    for j in range(n - 1, -1, -1):
        for k in range(3):
            disco = torres[k][j] if j < len(torres[k]) else 0
            print(f"[{disco}]", end="")
        print()
    print()

    for i, (origen, destino) in enumerate(movimientos): #ACA ESTOY ITERANDO
        torres[destino].append(torres[origen].pop())    #DIGAMOS QUE AGARRO EN DISCO Y LO COLOCO EN SU DESTINO

        print(f"MOVIMIENTO {i + 1}:")

        for j in range(n - 1, -1, -1):      #ITERO DE ARRIBA A ABAJO
            for k in range(3):      #ITERO EN LAS TRES TORRES

                disco = torres[k][j] if j < len(torres[k]) else 0 #OBTENGO LA POSIICON Y SI NO HAY NADA PONGO 0

                print(f"[{disco}]", end=" ") 
            print()
        print()



mostrar_torres(torre_hanoi(3,0,1,2), 3)
