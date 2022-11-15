import { Expression, OperatorExpression } from "./tfExpression";
import { IResolvable } from "./tokens/resolvable";

/**
 * This class contains static functions for all arithmetical and logical operators
 * in the Terraform configutation language.
 */
export class Op {
  /**
   * Renders !expr
   */
  public static not(expression: Expression): IResolvable {
    return new OperatorExpression("!", expression);
  }

  /**
   * Renders -expr
   */
  public static negate(expression: Expression): IResolvable {
    return new OperatorExpression("-", expression);
  }

  /**
   * Renders expr1 * expr2
   */
  public static mul(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("*", left, right);
  }

  /**
   * Renders expr1 / expr2
   */
  public static div(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("/", left, right);
  }

  /**
   * Renders expr1 % expr2
   */
  public static mod(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("%", left, right);
  }

  /**
   * Renders expr1 + expr2
   */
  public static add(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("+", left, right);
  }

  /**
   * Renders expr1 - expr2
   */
  public static sub(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("-", left, right);
  }

  /**
   * Renders expr1 > expr2
   */
  public static gt(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression(">", left, right);
  }

  /**
   * Renders expr1 >= expr2
   */
  public static gte(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression(">=", left, right);
  }

  /**
   * Renders expr1 < expr2
   */
  public static lt(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("<", left, right);
  }

  /**
   * Renders expr1 <= expr2
   */
  public static lte(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("<=", left, right);
  }

  /**
   * Renders expr1 == expr2
   */
  public static eq(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("==", left, right);
  }

  /**
   * Renders expr1 != expr2
   */
  public static neq(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("!=", left, right);
  }

  /**
   * Renders expr1 && expr2
   */
  public static and(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("&&", left, right);
  }

  /**
   * Renders expr1 || expr2
   */
  public static or(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("||", left, right);
  }
}
