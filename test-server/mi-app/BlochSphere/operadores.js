const getOperadores = () => {
    return {
        X: {
            matrix: window.tf.tensor2d([
                [0, 1],
                [1, 0]
            ]),
            axis: [1, 0, 0],
            angle: Math.PI
        },
        Y: {
            matrix: window.tf.complex(
                window.tf.zeros([2,2]),
                window.tf.tensor2d([
                    [0 , -1],
                    [1, 0]
                ])
                ),
            axis: [0, 1, 0],
            angle: Math.PI
        },
        Z: {
            matrix: window.tf.tensor2d([
                [1, 0],
                [0, -1]
            ]),
            axis: [0, 0, 1],
            angle: Math.PI
        },
        H: {
            matrix: window.tf.tensor2d([
                [Math.SQRT1_2, Math.SQRT1_2],
                [Math.SQRT1_2, -Math.SQRT1_2]
            ]),
            axis: [Math.SQRT1_2, 0, Math.SQRT1_2],
            angle: Math.PI
        },
        S: {
            matrix: window.tf.complex(
                window.tf.tensor2d([
                    [1, 0],
                    [0, 0]
                ]),
                window.tf.tensor2d([
                    [0, 0],
                    [0, 1]
                ])
                ),
            axis: [0, 0, 1],
            angle: Math.PI/2
        },
        T: {
            matrix: window.tf.complex(
                window.tf.tensor2d([
                    [1, 0],
                    [0, Math.SQRT1_2]
                ]),
                window.tf.tensor2d([
                    [0, 0],
                    [0, Math.SQRT1_2]
                ])
                ),
            axis: [0, 0, 1],
            angle: Math.PI/4
        },
    }
}