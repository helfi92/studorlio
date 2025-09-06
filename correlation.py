import math

def pearson_correlation(x, y):
    n = len(x)
    if n != len(y):
        raise ValueError("Input lists must have the same length.")

    mean_x = sum(x) / n
    mean_y = sum(y) / n

    numerator = sum((xi - mean_x) * (yi - mean_y) for xi, yi in zip(x, y))

    sum_sq_x = sum((xi - mean_x) ** 2 for xi in x)
    sum_sq_y = sum((yi - mean_y) ** 2 for yi in y)

    denominator = math.sqrt(sum_sq_x) * math.sqrt(sum_sq_y)

    if denominator == 0:
        return 0.0

    correlation = numerator / denominator
    return correlation

physics_scores = [15, 12, 8, 8, 7, 7, 7, 6, 5, 3]
history_scores = [10, 25, 17, 11, 13, 17, 20, 13, 9, 15]

correlation_coefficient = pearson_correlation(physics_scores, history_scores)

# Round to three decimal places and print in the specified format
print(f"{correlation_coefficient:.3f}")
